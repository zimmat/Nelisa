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


var app = express();

var dbOptions = {
  host: 'localhost',
  user: 'root',
  password: 'coder123',
  database: 'nelisa'
};

var rolesMap = {
  "Nelisa": "admin",
  "Zee": "viewer"
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

// app.post('/', function(req, res) {
//
// });
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
      password: req.body.password
    }
    console.log(user);
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
                user: rolesMap[req.body.username] === "viewer"
              };
              console.log("req.session.user");
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
    user: req.session.user
  });
});

app.get("/logout", function(req, res) {
  delete session.user;
  res.redirect("/login");
})

app.get("/login", function(req, res) {
  res.render("login", {});
});

function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', {
    error: err
  });
}

app.get('/sales/:week', weeklyStats.show);
app.get('/categories', categories.show);
app.get('/categories/add', categories.showAdd);
app.get('/categories/edit/:category_id', categories.get);
app.post('/categories/update/:category_id', categories.update);
app.post('/categories/add', categories.add);
app.get('/categories/delete/:category_id', categories.delete);
app.get('/products/delete/:product_id', products.delete);


app.get('/', function(req, res) {
  res.render('signin');
});
app.get('/products', products.show);
app.get('/products/edit/:product_id', products.get);
app.post('/products/update/:product_id', products.update);
app.get('/products/add', products.showAdd);
app.post('/products/add', products.add);


app.get('/sales', sales.show);
app.get('/sales/add', sales.showAdd);
app.get('/sales/edit/:sales_id', sales.get);
app.post('/sales/update/:sales_id', sales.update);
app.post('/sales/add', sales.add);
app.get('/sales/delete/:sales_id', sales.delete);


app.get('/purchases', purchases.show);
app.get('/purchases/add', purchases.showAdd);
app.get('/purchases/edit/:purchase_id', purchases.get);
app.post('/purchases/update/:purchase_id', purchases.update);
app.post('/purchases/add', purchases.add);
app.get('/purchases/delete/:purchase_id', purchases.delete);

app.get('/users', users.show);
app.get('/users/add', users.showAdd);
app.post('/users/add', users.add);
app.get('/users/edit/:user_id', users.get);
app.post('/users/update/:users_id', users.update);
app.get('/users/delete/:user_id', users.delete);

// app.get('/signup/add', signup.showRegister);
// app.post('/users/add', users.register);
app.use(errorHandler);

//configure the port number using and environment number
var portNumber = process.env.CRUD_PORT_NR || 3000;
//start everything up
app.listen(portNumber, function() {
  console.log('Create, Read, Update, and Delete (CRUD) example server listening on:', portNumber);
});
