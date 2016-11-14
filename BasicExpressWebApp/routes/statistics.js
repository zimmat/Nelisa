exports.MostpopularProduct = function(req, res, next) {
  var mostPopularProduct = "SELECT products.product_id, products.product_name, SUM( quantity ) quantity FROM sales INNER JOIN products ON sales.product_id = products.product_id GROUP BY product_id ORDER BY quantity DESC  LIMIT 1";
  var leastPopularProduct = "SELECT products.product_id, products.product_name, SUM( quantity ) quantity FROM sales INNER JOIN products ON sales.product_id = products.product_id GROUP BY product_id ORDER BY quantity ASC  LIMIT 1";
  var mostProfitable = "SELECT sales.product_id, SUM( (sales.quantity * sales_price) - ( cost ) ) profitable FROM sales INNER JOIN purchases ON sales.product_id = purchases.product_id GROUP BY product_id ORDER BY profitable DESC LIMIT 1";
  var leastProfitable = "SELECT sales.product_id, SUM( (sales.quantity * sales_price) - ( cost ) ) profitable FROM sales INNER JOIN purchases ON sales.product_id = purchases.product_id GROUP BY product_id ORDER BY profitable ASC LIMIT 1";
  req.getConnection(function(err, connection) {
    connection.query(mostPopularProduct, function(err, max) {
      if (err) return next(err);

      connection.query(leastPopularProduct, function(err, min) {
        if (err) return next(err);
        connection.query(mostProfitable, function(err, profitable) {
          if (err) return next(err);
          connection.query(leastProfitable, function(err, leastProfitable) {
            if (err) return next(err);
            res.render('statistics', {
              max: max,
              min: min,
              profitable: profitable,
              leastProfitable: leastProfitable,
              user: req.session.user,
              is_admin: req.session.user.is_admin
            })
          })
        });
      });
    });
  });
}
