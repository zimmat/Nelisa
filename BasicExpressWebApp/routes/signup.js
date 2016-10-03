exports.showRegister = function(req, res){
	res.render('signup');
}

exports.register = function(req, res, next) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    var data = {
      user_name: req.body.user_name,
      password: req.body.password,
      Role: req.body.Role

    };

    connection.query('insert into users set ?', data, function(err, results) {
      if (err) return next(err);
      res.redirect('/login');
    });
  });
};
