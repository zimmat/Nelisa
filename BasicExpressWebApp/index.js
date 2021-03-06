var express = require('express'),
  exphbs = require('express-handlebars'),
  mysql = require('mysql'),
  myConnection = require('express-myconnection'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  // weeklyStats = require('./routes/weeklyStats')
  categories = require('./routes/categories'),
  products = require('./routes/products'),
  sales = require('./routes/sales'),
  purchases = require('./routes/purchases'),
  users = require('./routes/users'),
  flash = require('express-flash'),
  signup = require('./routes/signup'),
  statistics = require('./routes/statistics'),
  middleware = require('./middlewares/server'),
  bcrypt = require('bcrypt');




var app = express();

var dbOptions = {
  host: 'localhost',
  user: 'nelisa',
  password: 'nelisa',
  database: 'nelisa'
};

var rolesMap = {
  "Nelisa": "admin",
  "Zee": "Viewer",
  "Zimkhitha": "admin"
};

//setup template handlebars as the template engine
app.engine('handlebars', exphbs({
  defaultLayout: 'display'
}));
app.set('view engine', 'handlebars');
app.use(session({
  secret: 'keyboard cat',
  cookie: {
    maxAge: 60000 * 30 // expire after 30 minutes
  }
}));
app.use(function(req, res, next) {
  res.locals.currentUser = req.session.user_id;
  next();
});


app.use(express.static(__dirname + '/public'));
app.use(flash());

//setup middleware
app.use(myConnection(mysql, dbOptions, 'single'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
  }))
  // parse application/json
app.use(bodyParser.json())

app.get("/signup", middleware.loggedOut, function(req, res, next) {
  res.render("signup");
});

app.get("/login", middleware.loggedOut, function(req, res) {
  res.render("login", {
    showNavBar: false
  });
});
app.get("/", function(req, res) {
  res.redirect("/home");
});
var checkUser = function(req, res, next) {
  if (req.session.user) {
    return next();
  }
  res.redirect("/login");
};
app.post("/login", function(req, res, next) {
  var user = {
    name: req.body.name,
    password: req.body.password,
  }


  console.log('req.body.name : ');
  console.log(req.body);


  req.getConnection(function(err, connection) {
    connection.query('SELECT * FROM users WHERE name = ?', [req.body.name], function(err, results) {
      if (err) return next(err);
      console.log(results[0]);
      if (results.length == 0) {
        req.flash("warning", "Register to proceed");
        res.redirect("/login")
      } else {

        // console.log(results);
        var encryptedPassword = results[0];
        // console.log("encryptedPassword :", encryptedPassword.password);
        // console.log("passwords :", user.password);
        bcrypt.compare(user.password, encryptedPassword.password, function(err, pass) {
          if (err) return next(err);
          // console.log('pass : ' + pass);

          if (pass) {
            req.session.user = {
              name: req.body.name,
              is_admin: rolesMap[req.body.name] === "admin",
              user: rolesMap[req.body.name] === "Viewer"
            }
            req.flash("warning", "Welcome to Nelisa Spaza Shop");
            res.redirect("/home");
          } else {
            req.flash("warning", "incorrect password");
            return res.redirect("/login");
          }
        })
      }
    });

  });
});

app.get("/home", checkUser, function(req, res) {
  res.render("home", {
    user: req.session.user,
    is_admin: req.session.user.is_admin
  })
});

app.get("/logout", function(req, res) {
  delete req.session.user;
  res.redirect("/login");
})


function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', {
    error: err
  });
}

// app.get('/sales/:week', middleware.requiresLogin, weeklyStats.show);


app.get('/categories', middleware.requiresLogin, categories.show);
app.get('/categories/add', middleware.requiresLoginAsAdmin, categories.showAdd);
app.get('/categories/edit/:category_id', middleware.requiresLoginAsAdmin, categories.get);
app.post('/categories/update/:category_id', middleware.requiresLoginAsAdmin, categories.update);
app.post('/categories/add', middleware.requiresLoginAsAdmin, categories.add);
app.get('/categories/delete/:category_id', middleware.requiresLoginAsAdmin, categories.delete);


app.get('/products', middleware.requiresLogin, products.show);
app.get('/products/add', middleware.requiresLoginAsAdmin, products.showAdd);
app.post('/products/add', middleware.requiresLoginAsAdmin, products.add);
app.get('/products/edit/:product_id', middleware.requiresLoginAsAdmin, products.get);
app.post('/products/update/:product_id', middleware.requiresLoginAsAdmin, products.update);
app.get('/products/delete/:product_id', middleware.requiresLoginAsAdmin, products.delete);

app.get('/sales', middleware.requiresLogin, sales.show);
app.get('/sales/add', middleware.requiresLoginAsAdmin, sales.showAdd);
app.get('/sales/edit/:sales_id', middleware.requiresLoginAsAdmin, sales.get);
app.post('/sales/update/:sales_id', middleware.requiresLoginAsAdmin, sales.update);
app.post('/sales/add', middleware.requiresLoginAsAdmin, sales.add);
app.get('/sales/delete/:sales_id', middleware.requiresLoginAsAdmin, sales.delete);


app.get('/purchases', middleware.requiresLogin, purchases.show);
app.get('/purchases/add', middleware.requiresLoginAsAdmin, purchases.showAdd);
app.get('/purchases/edit/:purchase_id', middleware.requiresLoginAsAdmin, purchases.get);
app.post('/purchases/update/:purchase_id', middleware.requiresLoginAsAdmin, purchases.update);
app.post('/purchases/add', middleware.requiresLoginAsAdmin, purchases.add);
app.get('/purchases/delete/:purchase_id', middleware.requiresLoginAsAdmin, purchases.delete);

app.get('/users', middleware.requiresLoginAsAdmin, users.show);
app.get('/users/add', middleware.requiresLoginAsAdmin, users.showAdd);
app.post('/users/add', middleware.requiresLoginAsAdmin, users.add);
app.get('/users/edit/:user_id', middleware.requiresLoginAsAdmin, users.get);
app.post('/users/update/:users_id', middleware.requiresLoginAsAdmin, middleware.requiresLogin, users.update);
app.get('/users/delete/:user_id', middleware.requiresLoginAsAdmin, users.delete);

// app.get('/quantity', middleware.requiresLoginAsAdmin,statistics.ProductsQuantity);
app.get('/statistics', middleware.requiresLoginAsAdmin, statistics.MostpopularProduct);
// app.get('/statistics', middleware.requiresLoginAsAdmin,statistics.LeastpopularProduct);

app.get('/signup', signup.showSignup);
app.post('/signup/add', signup.add);
// app.get('')

app.use(errorHandler);

//configure the port number using and environment number
var portNumber = process.env.CRUD_PORT_NR || 3000;
//start everything up
app.listen(portNumber, function() {
  console.log('Create, Read, Update, and Delete (CRUD) example server listening on:', portNumber);
});
