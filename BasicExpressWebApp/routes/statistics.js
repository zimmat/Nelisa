exports.ProductsQuantity = function(req, res, next){
  req.getConnection(function(err, connection) {
    connection.query("SELECT products.product_id, products.product_name, SUM( quantity ) quantity FROM sales INNER JOIN products ON sales.product_id = products.product_id GROUP BY product_id ORDER BY quantity", [],function(err,qty){
      if(err) return next(err);
      res.render('statistics');
    });

  });
}

exports.MostpopularProduct = function(req, res, next){
  req.getConnection(function(err, connection) {
    connection.query("SELECT MAX( quantity ) most_popular FROM sales", function(err, max){
      if(err) return next(err);
      res.render('statistics')
    })
  });
}
