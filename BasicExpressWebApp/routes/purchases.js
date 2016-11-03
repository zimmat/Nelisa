
exports.show = function(req, res, next) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query("select DATE_FORMAT(purchases.purchase_date,'%Y-%m-%d') as purchase_date, purchases.purchase_id ,purchases.shopName,products.product_name,purchases.quantity,purchases.cost,purchases.product_id from products inner join purchases on products.product_id = purchases.product_id order by purchase_date", [], function(err, results) {
      if (err) return next(err);
      res.render('purchases', {
        no_products: results.length === 0,
        purchases: results,
        user : req.session.user,
				is_admin : req.session.user.is_admin
      });
    });
  });
}
const showAddScreen = function(req,res,purchaseData){
    req.getConnection(function(err, connection) {
  connection.query('SELECT * from products', function(err, products) {
    if (err) return next(err);
  res.render('add_purchases', {
    products : products,
    user : req.session.user,
    is_admin : req.session.user.is_admin,
    purchaseData: purchaseData
  });
});
});
};
exports.showAdd = function(req, res) {
      showAddScreen(req, res, {})
    };


exports.add = function(req, res, next) {
  var moment = require('moment');
  moment().format();
  var input = req.body
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    var error = false;
    const todayOrEarlier = moment(input.purchase_date).isSameOrBefore(moment());
    if(!todayOrEarlier){
      req.flash("warning","picking future dates restricted");
      error = true;
    }
    if(error) return showAddScreen(req, res,input )
        var data = {
      shopName: input.shopName,
      purchase_date: input.purchase_date,
      quantity: input.quantity,
      cost: input.cost,
      product_id: input.product_id
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
    connection.query('SELECT * FROM products', [id], function(err, products) {
      if (err) return next(err);
      connection.query("select DATE_FORMAT(purchases.purchase_date,'%Y-%m-%d') as purchase_date, purchases.purchase_id ,purchases.shopName,products.product_name,purchases.quantity,purchases.cost,purchases.product_id from products inner join purchases on products.product_id = purchases.product_id WHERE purchase_id = ?", [id], function(err, purchases) {
        if (err) return next(err);
        var purchase = purchases[0];
        products = products.map(function(product) {
          product.selected = product.product_id === purchase.product_id ? "selected" : "";
          return product;
        });
        res.render('edit_purchases', {
          products: products,
          data: purchase,
          user : req.session.user,
  				is_admin : req.session.user.is_admin
        });
      });
    });
  });
};

exports.update = function(req, res, next) {
  var moment = require('moment');
  moment().format();
  var input = req.body
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    var error = false;
    const todayOrEarlier = moment(input.purchase_date).isSameOrBefore(moment());
    if(!todayOrEarlier){
      req.flash("warning","picking future dates restricted");
      error = true;
    }
      if(error) return showAddScreen(req, res,input )
  var data = {
    shopName: input.shopName,
    purchase_date: input.purchase_date,
    quantity: input.quantity,
    cost: input.cost,
    product_id: input.product_id

  };
  var id = req.params.purchase_id;
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query('UPDATE purchases SET ? WHERE purchase_id = ?', [data, id], function(err, rows) {
      if (err) return next(err);
      res.redirect('/purchases');
    });
  });
});
};
exports.delete = function(req, res, next) {
  var id = req.params.purchase_id;
  req.getConnection(function(err, connection) {
    connection.query('DELETE FROM purchases WHERE purchase_id = ?', [id], function(err, rows) {
      if (err) return next(err);
      res.redirect('/purchases');
    });
  });
};
