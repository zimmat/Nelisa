var express = require('express'),
  exphbs = require('express-handlebars'),
  mysql = require('mysql'),
  myConnection = require('express-myconnection'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  weeklyStats = require('./routes/weeklyStats')
categories = require('./routes/categories'),
  products = require('./routes/products'),
  sales = require('./routes/sales'),
  purchases = require('./routes/purchases'),
  users = require('./routes/users'),
  flash = require('express-flash'),
  signup = require('./routes/signup');
  middleware = require('./middlewares/server');


var app = express();

var dbOptions = {
  host: 'localhost',
  user: 'root',
  password: 'coder123',
  database: 'nelisa'
};

var rolesMap = {
  "Nelisa": "admin",
  "Zee": "user"
};

//setup template handlebars as the template engine
app.engine('handlebars', exphbs({
  defaultLayout: 'display'
}));
app.set('view engine', 'handlebars');
app.use(session({
  secret: 'keyboard cat',
  cookie: {
    maxAge: 60000
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

app.get("/signup", middleware.loggedOut, function(req, res, next){
res.render("signup");
});

app.get("/login",middleware.loggedOut, function(req, res) {
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
app.post("/login", function(req, res) {
  var user1 = [];
  if (req.body.username) {
    var user = {
      name: req.body.username,
      password: req.body.password,
    }
    // console.log(user.password);
    user1.push(user);
    req.getConnection(function(err, connection) {
      connection.query('SELECT * FROM users', [], function(err, database) {
        if (err) return next(err);
        database.forEach(function(dbUser) {
          user1.forEach(function(input) {
            if (dbUser.username === input.name && dbUser.password === input.password) {
              req.session.user = {
                name: req.body.username,
                is_admin: rolesMap[req.body.username] === "admin",
                user: rolesMap[req.body.username] === "user"
              };
               console.log(req.session.user);
              res.redirect("/home");
            }
            if (dbUser.username === input.name && dbUser.password !== input.password) {
              req.flash("warning","wrong password");
              return res.redirect('/login');
            }
          });
        });
      });
    });
  }
else {
  req.flash("warning","all fields required");
  return res.redirect('/login');
}

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

app.get('/sales/:week', middleware.requiresLogin,weeklyStats.show);


app.get('/categories', middleware.requiresLogin,categories.show);
app.get('/categories/add',middleware.requiresLogin,categories.showAdd);
app.get('/categories/edit/:category_id',middleware.requiresLogin, categories.get);
app.post('/categories/update/:category_id',middleware.requiresLogin, categories.update);
app.post('/categories/add',middleware.requiresLogin, categories.add);
app.get('/categories/delete/:category_id',middleware.requiresLogin, categories.delete);


app.get('/products',middleware.requiresLogin, products.show);
app.get('/products/add', middleware.requiresLogin,products.showAdd);
app.post('/products/add',middleware.requiresLogin,products.add);
app.get('/products/edit/:product_id',middleware.requiresLogin,products.get);
app.post('/products/update/:product_id',middleware.requiresLogin,products.update);
app.get('/products/delete/:product_id',middleware.requiresLogin, products.delete);

app.get('/sales',middleware.requiresLogin,sales.show);
app.get('/sales/add',middleware.requiresLogin,sales.showAdd);
app.get('/sales/edit/:sales_id',middleware.requiresLogin,sales.get);
app.post('/sales/update/:sales_id',middleware.requiresLogin,sales.update);
app.post('/sales/add', middleware.requiresLogin,sales.add);
app.get('/sales/delete/:sales_id',middleware.requiresLogin,sales.delete);


app.get('/purchases',middleware.requiresLogin, purchases.show);
app.get('/purchases/add',middleware.requiresLogin, purchases.showAdd);
app.get('/purchases/edit/:purchase_id',middleware.requiresLogin, purchases.get);
app.post('/purchases/update/:purchase_id',middleware.requiresLogin, purchases.update);
app.post('/purchases/add',middleware.requiresLogin, purchases.add);
app.get('/purchases/delete/:purchase_id',middleware.requiresLogin, purchases.delete);

app.get('/users',middleware.requiresLogin, users.show);
app.get('/users/add',middleware.requiresLogin, users.showAdd);
app.post('/users/add',middleware.requiresLogin, users.add);
app.get('/users/edit/:user_id',middleware.requiresLogin, users.get);
app.post('/users/update/:users_id',middleware.requiresLogin,middleware.requiresLogin, users.update);
app.get('/users/delete/:user_id',middleware.requiresLogin, users.delete);

app.use(errorHandler);

//configure the port number using and environment number
var portNumber = process.env.CRUD_PORT_NR || 3000;
//start everything up
app.listen(portNumber, function() {
  console.log('Create, Read, Update, and Delete (CRUD) example server listening on:', portNumber);
});
