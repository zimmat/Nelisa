exports.show = function(req, res, next) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query('SELECT * from sales', [], function(err, results) {
      if (err) return next(err);
      res.render('sales', {
        no_products: results.length === 0,
        sales: results,
      });
    });
  });
};
exports.showAdd = function(req, res) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query('SELECT * from sales', [], function(err, categories) {
      if (err) return next(err);
      res.render('add_sales', {
        categories: categories,
      });
    });
  });
};

exports.add = function(req, res, next) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    var data = {
      sales_id: Number(req.body.category_id),
      Sales_date: req.body.Sales_date,
      product_name: req.body.product_name,
      quantity: req.body.quantity,
      sales_price: req.body.sales_price,
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
      connection.query('SELECT * FROM sales WHERE sales_id = ?', [id], function(err, products) {
        if (err) return next(err);
        var product = products[0];
        categories = categories.map(function(category) {
          category.selected = category.id === product.category_id ? "selected" : "";
          return category;
        });
        res.render('edit_sales', {
          categories: categories,
          data: product
        });
      });
    });
  });
};

exports.update = function(req, res, next) {

  var data = {
    sales_id: Number(req.body.category_id),
    Sales_date: req.body.Sales_date,
    product_name: req.body.product_name,
    quantity: req.body.quantity,
    sales_price: req.body.sales_price,
    product_id: req.body.product_id
  };
  var id = req.params.sales_id;
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query('UPDATE sales SET ? WHERE sales_id = ?', [data, id], function(err, rows) {
      if (err) return next(err);
      res.redirect('/sales');
    });
  });
};

exports.delete = function(req, res, next) {
  var id = req.params.sales_id;
  req.getConnection(function(err, connection) {
    connection.query('DELETE FROM sales WHERE sales_id = ?', [id], function(err, rows) {
      if (err) return next(err);
      res.redirect('/sales');
    });
  });
};