var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
  
    port: 3306,
  
    user: "root",
  
    password: "password",
    database: "ramozon_db"
  
});

connection.connect(function(err) {
  if(err) throw err;
  console.log("You are connected!");
  start();
});

start = function(){
  console.log("loading...");
  connection.query("SELECT item_id, product_name, price FROM products", function(err, results){
  if(err) throw err;
    var choiceArray = [];
    for (let i = 0; i < results.length; i++){
      console.log("Product ID: ", results[i].item_id,  "Product Name: ", results[i].product_name, "Price: $", results[i].price);
    }
  
  questions();
  })
}

questions = function(){

    inquirer
    .prompt([
      {
        name:"inventory",
        type:"input",
        message: "Please input the Product ID of the item you'd like to purchase.",
        filter: Number
      },
      {
        name:"buy",
        type:"input",
        message:"How many would you like to buy?",
        filter:Number
      }
    ]).then(function(answers){
      var quantityForPurchase = answers.buy;
      var idForPurchase = answers.inventory;
      purchase(idForPurchase, quantityForPurchase);
    })
};

purchase = function (item, desiredQuant){
  connection.query("SELECT * FROM products WHERE item_id = " + item, function(err, results){
    if (err) throw err;
    if(desiredQuant <= results[0].stock_quantity){
      var total = results[0].price * desiredQuant;
      console.log("We have supply on hand! \nYour total for " + desiredQuant + " units is $" + total + ". \nCongratulations on your purchase!");
      
      var query = "UPDATE products SET ? WHERE ?"
      connection.query(query, { stock_quantity: item.stock_quantity - desiredQuant, item_id: item.item}, function(err, results){});
    }else{
      console.log("Transaction could not be processed.\nWe do not have enough " + results[0].product_name + " to fulfill this order. Please try again at a later time.");
    };
    // start();
    connection.end();
  })
};