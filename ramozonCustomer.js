var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
  
    port: 3306,
  
    user: "root",
  
    password: "password",
    database: "ramozon_db"
  
});

connection.connect(function(err) {
  if (err) throw err;
  start();
});

start = function(){
  connection.query("SELECT id, product_name, price FROM products WHERE ?", function(err, res){
    if (err) throw err;
  inquirer
  .prompt(
    {
      name:"inventory",
      type:"rawlist",
      message:"Which item would you like to buy?",
      choices: function(){
        var choiceArray = [];
        for (let i = 0; res.length; i++){
          choiceArray.push("ID: " + res[i].id + "Product: " + res[i].product_name + " Price: $" + res[i].price);
        }
        return choiceArray;
      }
    })
  })
}