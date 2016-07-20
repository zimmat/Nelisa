var mysql = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
user     : 'root',
password : 'coder123',
database : 'nelisa'
});

var sql = "select * from categories";


//map category name by category id
conn.query(sql, function(err, categories) {
    if (err) return console.log(err);;
    console.log(categories);
    conn.end();
});
