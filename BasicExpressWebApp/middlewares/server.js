app.get('/login',function(req, res, next)(
  return res.render("/login");
));

app.post('/login',function(req, res , next){
  if(req.body.username && req.password){
    return(next);
  }else{
    var err = new error("user credentials required");
    err.status = 400;
    return next(err);
  }
})
app.get('/singup',function(req, res, next){
  return res.render('signup');
});

app.post('/signup',function(req, res, next){
if(req.body.username &&
req.body.password &&
req.body.confirmPassword){
  if req.body.password !== req.body.confirmPassword{
    var err = new error("password do not match");
    err.status = 400;
    return next(err);
  }
}else{
    var err = new Error("all fields are required");
    err.status = 400;
    return next(err);
  }
});

app.get('/', function(req, res){
  res.redirect("/home");
});

app.get('/categories',function(req, res, next){
  return res.render('categories');
});

app.get('/products',function(req, res, next){
  return res.render('products');
});

app.get('/sales',function(req, res, next){
  return res.render('sales');
});

app.get('/purchases',function(req, res, next){
  return res.render('purchases');
});

app.get('/weeklyStatistics',function(req, res, next){
  return res.render('weeklyStatistics');
});
