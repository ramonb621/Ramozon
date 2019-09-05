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
      console.log(results[i].item_id, results[i].product_name, results[i].price);
    }
    // return choiceArray;
  
  // inquirer
  // .prompt([
  //   {
  //     name:"inventory",
  //     type:"rawlist",
  //     choices: function(){
  //       var choiceArray = [];
  //       for (let i = 0; results.length; i++){
  //         choiceArray.push(results[i].position, results[i].product_name, results[i].price);
  //       }
  //       return choiceArray;
  //     },
  //     message: "Select the product you'd like to buy by matching the product ID."
  //   },
  //   {
  //     name:"buy",
  //     type:"input",
  //     message:"How many would you like to buy?"
  //   }
  // ])
  // .then(function(answer){
  //   var chosenItem;
  //   for(let i = 0; i < results.length; i++){
  //     if(results[i].product_name === answer.choice){
  //       chosenItem = res[i];
  //     }
  //   }
  //   if(chosenItem.sell_price === parseInt(answer.price)){
  //     connection.query(
  //       "UPDATE products SET ? WHERE ?",
  //       [
  //         {
  //           sell_price: answer.price
  //         },
  //         {
  //           position: chosenItem.position
  //         }
  //     ],
  //     function(error){
  //       if (error) throw error;
  //       console.log("Purchase complete!");
  //       start();
  //     }
  //   )
  // }
  // else{
  //   console.log("Your transaction was unsuccessful. Please try again at a later time.");
  //   start();
  // }
  // })
  connection.end();
  })
}