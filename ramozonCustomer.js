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
  inquirer.prompt({
      name:"inventory",
      type:"list",
      choices: [
        "ID: 1	Product: monster energy drink 24 pk Price: $32.99",
        "ID: 2	Product: marvel select 6 in. spider-man	Price:	$19.99",
        "ID: 3	Product: slim jims 32 pk	Price: $9.99",
        "ID: 4	Product: gillete fusion 5 replacement razors 12pk	Price:	$24.99",
        "ID: 5	Product: hanes men's ankle-high socks 6 pk	Price:	$14.99",
        "ID: 6	nutro senior dog food 32 lb. bag	Price:	$24.99",
        "ID: 7	Product: vizio 56 in. 1080p HDTV	Price:	$999.99",
        "ID: 8	ID: lego star wars 14 in. x-wing	Price:	$29.99",
        "ID: 9	iphone lightning cable	Price:	$9.99",
        "ID: 10	iphone otterbox case	Price:	$59.99"
      ]
  })
  // .then(function(answer){
  //   var query = "SELECT id, product_name, price FROM products WHERE ?";
  //   connection.query(query, {product: answer.product_name}, function(err, res){
  //     if(err) throw err;
  //     for (let i = 0; i < res.length; i++) {
  //       console.log("ID: " + res[i].id + " || Product: " + res[i].product_name + " || Price: $" + res[i].price);
  //     }
  //   })
  // })
  .then(function(answer){
    switch(answer.inventory){
      case 
    }
  }
}