var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
var salt = bcrypt.genSaltSync(saltRounds);
var hash = bcrypt.hashSync(myPlaintextPassword, salt);
exports.showSignup = function(req, res){
	res.render('signup');
}

exports.add = function(req, res, next) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    var data = {
      username: req.body.username,
      password: req.body.salt,
      Role: req.body.Role

    };

    connection.query('insert into users set ?', data, function(err, results) {
      if (err) return next(err);
      res.redirect('/login');
    });
  });
};
