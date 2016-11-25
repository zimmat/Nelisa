// app.post("/login", function(req, res, next) {
//   var user = {
//       name: req.body.username,
//       password: req.body.password,
//     }
//
//
//   req.getConnection(function(err, connection) {
//     connection.query('SELECT * FROM users WHERE username = ?', [user.name], function(err, results) {
//   console.log("*************************************");
//       console.log(results.password)
//       console.log("**************************************************");
//       if (err) return next(err);
//       if (results.length == 0) {
//         req.flash("warning", "Register to proceed");
//         res.redirect("/login")
//       } else {
//         bcrypt.compare(results.password, user.password, function(err, pass) {
//           // console.log(password);
//           // console.log("===========");
//           // console.log(user.password);
//           if (pass) {
//             req.session.user = {
//               name: req.body.username,
//               is_admin: rolesMap[req.body.username] === "admin",
//               user: rolesMap[req.body.username] === "Viewer"
//             }
//           req.flash("warning", "Welcome to Nelisa Spaza Shop");
//             res.redirect("/home");
//            } else {
//               req.flash("warning", "incorrect password");
//             return res.redirect("/login");
//           }
//         })
//     }
//   });
//
// });
// });
