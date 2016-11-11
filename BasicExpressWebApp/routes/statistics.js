// exports.ProductsQuantity = function(req, res, next) {
//   req.getConnection(function(err, connection) {
//     connection.query("SELECT products.product_id, products.product_name, SUM( quantity ) quantity FROM sales INNER JOIN products ON sales.product_id = products.product_id GROUP BY product_id ORDER BY quantity", [], function(err, qty) {
//
//       if (err) return next(err);
//       res.render('quantity', {
//         no_products: qty.length === 0,
//         qty: qty,
//         user: req.session.user,
//         is_admin: req.session.user.is_admin
//       });
//     });
//
//   });
// }

exports.MostpopularProduct = function(req, res, next) {
  var quantity = "SELECT products.product_id, products.product_name, SUM( quantity ) quantity FROM sales INNER JOIN products ON sales.product_id = products.product_id GROUP BY product_id ORDER BY quantity";
    var mostPopularProduct = "SELECT products.product_id, products.product_name, MAX( quantity ) quantity FROM sales INNER JOIN products ON sales.product_id = products.product_id";
    var leastPopularProduct = "SELECT products.product_id, products.product_name, MIN( quantity ) quantity FROM sales INNER JOIN products ON sales.product_id = products.product_id";
    req.getConnection(function(err, connection) {
          connection.query(mostPopularProduct, function(err, max) {
            if (err) return next(err);

            connection.query(leastPopularProduct, function(err, min) {
              if (err) return next(err);
              res.render('statistics', {
                max: max,
                min: min,
                qty : qty,
                user: req.session.user,
                is_admin: req.session.user.is_admin
              })
            })
          });
        });
      }
