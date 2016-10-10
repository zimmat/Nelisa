exports.login = function(req,res,next){
  if (req.body.username) {
    var user = {
      name: req.body.username,
      password: req.body.password
    }
}
