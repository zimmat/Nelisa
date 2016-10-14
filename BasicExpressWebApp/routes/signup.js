exports.showSignup = function(req, res){
	res.render('signup');
}

exports.add = function(req, res, next) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    var data = {
      username: req.body.username,
      password: req.body.password,
      Role: req.body.Role

    };

    connection.query('insert into users set ?', data, function(err, results) {
      if (err) return next(err);
      res.redirect('/login');
    });
  });
};
