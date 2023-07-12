var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: "8111",
  user: "aman",
  password: "amanpreet",
  database: "pizza_order_system"
});

con.connect(function(err) {
  if(err) throw err;
  console.log("Connected!");
});