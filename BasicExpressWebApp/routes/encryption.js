// Require the bcrypt package
var bcrypt = require('bcrypt');

// Create a password salt
var salt = bcrypt.genSaltSync(10);

// Salt and hash password
var passwordToSave = bcrypt.hashSync(passwordFromUser, salt);

module.exports(req,res){
  username: req.body.username,
  passwordEnteredByUser: req.body.password
// Grab user from your database 
connection.query("SELECT * FROM users WHERE username = ?",
    [usernameEnteredByUser],
    function(err, rows) {
        if (err) {
            return done(err);
        }

        if (bcrypt.hashSync(passwordEnteredByUser, salt) === rows[0].password) {
          // Yay, it worked!
        }
});
}
