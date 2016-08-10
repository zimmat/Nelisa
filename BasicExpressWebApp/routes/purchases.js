exports.show = function(req, res, next) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query('SELECT * from purchases', [], function(err, results) {
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
    connection.query('SELECT * from purchases', [], function(err, categories) {
      if (err) return next(err);
      res.render('add_purchases', {
        categories: categories,
      });
    });
  });
};
exports.add = function(req, res, next) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    var data = {
      purchase_id: Number(req.body.category_id),
      shopName: req.body.shopName,
      purchase_date: req.body.purchase_date,
      product_name: req.body.product_name,
      quantity: req.body.quantity,
      cost: req.body.cost,
      totalCost: req.body.totalCost,
      product_id: req.body.product_id
    };

    connection.query('insert into sales set ?', data, function(err, results) {
      if (err) return next(err);
      res.redirect('/sales');
    });
  });
};

exports.get = function(req, res, next) {
  var id = req.params.sales_id;
  req.getConnection(function(err, connection) {
    connection.query('SELECT * FROM categories', [id], function(err, categories) {
      if (err) return next(err);
      connection.query('SELECT * FROM purchases WHERE purchase_id = ?', [id], function(err, products) {
        if (err) return next(err);
        var product = products[0];
        categories = categories.map(function(category) {
          category.selected = category.id === product.category_id ? "selected" : "";
          return category;
        });
        res.render('edit_purchases', {
          categories: categories,
          data: product
        });
      });
    });
  });
};

exports.update = function(req, res, next) {

  var data = {
    purchase_id: Number(req.body.purchase_id),
    shopName: req.body.shopName,
    purchase_date: req.body.purchase_date,
    product_name: req.body.product_name,
    quantity: req.body.quantity,
    cost: req.body.cost,
    totalCost: req.body.totalCost,
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
