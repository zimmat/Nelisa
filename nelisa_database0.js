var mysql = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
user     : 'root',
password : 'coder123',
database : 'nelisa'
});

var sql = "select * from Categories";

//create a list of lists
conn.query(sql, function(err, Categories) {
    if (err) return console.log(err);;
    console.log(Categories);
    conn.end();
});
