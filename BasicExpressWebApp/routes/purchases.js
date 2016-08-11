exports.show = function(req, res, next) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query('select purchases.purchase_id ,purchases.shopName,purchases.purchase_date,products.product_name,purchases.quantity,purchases.cost,purchases.product_id from products inner join purchases on products.product_id = purchases.product_id order by purchase_date', [], function(err, results) {
      if (err) return next(err);
      res.render('purchases', {
        no_products: results.length === 0,
        purchases: results,
      });
    });
  });
}
exports.showAdd = function(req, res) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query('SELECT * from products', function(err, products) {
      if (err) return next(err);
      res.render('add_purchases', {
        products: products,
      });
    });
  });
};

exports.add = function(req, res, next) {

  req.getConnection(function(err, connection) {
    if (err) return next(err);
    var data = {
      shopName: req.body.shopName,
      purchase_date: req.body.purchase_date,
      quantity: req.body.quantity,
      cost: req.body.cost,
      product_id: req.body.product_id
    };
    connection.query('insert into purchases set ?', data, function(err, results) {
      if (err)
          return next(err);
      res.redirect('/purchases');
    });
  });
};
exports.get = function(req, res, next) {
  var id = req.params.purchase_id;
  req.getConnection(function(err, connection) {
    connection.query('SELECT * FROM products', [id], function(err, categories) {
      if (err) return next(err);
      connection.query('SELECT * FROM purchases WHERE purchase_id = ?', [id], function(err, products) {
        if (err) return next(err);
        var purchase = purchases[0];
        products = products.map(function(product) {
          product.selected = product.id === purchase.product_id ? "selected" : "";
          return product;
        });
        res.render('edit_purchases', {
          products: products,
          data: purchase
        });
      });
    });
  });
};

exports.update = function(req, res, next) {

  var data = {
    shopName: req.body.shopName,
    purchase_date: req.body.purchase_date,
    // product_name: req.body.product_name,
    quantity: req.body.quantity,
    cost: req.body.cost,
    product_id: req.body.product_id

  };
  var id = req.params.purchase_id;
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query('UPDATE purchases SET ? WHERE purchase_id = ?', [data, id], function(err, rows) {
      if (err) return next(err);
      res.redirect('/purchases');
    });
  });
};
