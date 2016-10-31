exports.show = function(req, res, next) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query("select DATE_FORMAT(sales.Sales_date,'%m/%d/%Y') as Sales_date,sales.sales_id,products.product_name,sales.quantity,sales.sales_price,sales.product_id from products inner join sales on products.product_id = sales.product_id order by Sales_date;", [], function(err, results) {
      if (err) return next(err);
      res.render('sales', {
        no_products: results.length === 0,
        sales: results,
        user : req.session.user,
				is_admin : req.session.user.is_admin
      });
    });
  });
};
exports.showAdd = function(req, res) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query('SELECT * from products', [], function(err, products) {
      if (err) return next(err);
      res.render('add_sales', {
        products: products,
        user : req.session.user,
				is_admin : req.session.user.is_admin
      });
    });
  });
};

exports.add = function(req, res, next) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    var data = {
      Sales_date: req.body.Sales_date,
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
    connection.query('SELECT * FROM products', [id], function(err, products) {
      if (err) return next(err);
      connection.query("select DATE_FORMAT(sales.Sales_date,'%Y-%m-%d') as Sales_date,sales.sales_id,products.product_name,sales.quantity,sales.sales_price,sales.product_id from products inner join sales on products.product_id = sales.product_id where sales_id =?;", [id], function(err, sales) {
        if (err) return next(err);
        console.log(sales);
        var sale = sales[0];
        products = products.map(function(product) {
          console.log(products);
          product.selected = product.product_id === sale.product_id ? "selected" : "";
          return product;
        });
        res.render('edit_sales', {
          products: products,
          data: sale,
          user : req.session.user,
  				is_admin : req.session.user.is_admin
        });
    });
  });
});
};

exports.update = function(req, res, next) {

  var data = {
    Sales_date: req.body.Sales_date,
    quantity: req.body.quantity,
    sales_price: req.body.sales_price,
    product_id: req.body.product_id
  };
  // console.log(data.date);
  var id = req.params.sales_id;
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query('UPDATE sales SET ? WHERE p_id = ?', [data, id], function(err, rows) {
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
