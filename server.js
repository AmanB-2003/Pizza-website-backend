const express = require("express");
var mysql = require('mysql');
const bodyParser = require("body-parser");
//const session = require("express-session");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

//session - server side
// app.use(session ({
//   secret: "pizzzzza",
//   resave: false,
//   saveUnitialized: false
// }));
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

//insert order into order table
con.query("INSERT INTO `orders` (`orderID`, `orderStatus`, `totalPrice`, `paymentID`, `userID`, `employeeID`, `orderTime`) VALUES ('ghhff45', NULL, '300', 'gh566', 'cust1@gmail.com', '5', current_timestamp())",
(err,result)=>{
  if(err) {
  console.log(err)
  } 
  console.log(result)
});  

//insert order in orderPreparation table
con.query("INSERT INTO `orderpreparation` (`orderID`,`pizzaID`, `quantity`) VALUES ('ghhff45','4', '1')",
(err,result)=>{
  if(err) {
  console.log(err)
  } 
  console.log(result)
}); 

//INSERT INTO `orders`(`orderID`, `orderStatus`, `totalPrice`, `paymentID`, `userID`, `employeeID`, `orderTime`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]','[value-7]')


app.listen(4000 , function () {
  console.log("Started our server on port 4000");
});