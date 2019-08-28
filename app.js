var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
  
    port: 3306,
  
    user: "root",
  
    password: "",
    database: "ramozon_db"
  });
  
  connection.connect(function(err) {
    if (err) throw err;

    start();
  });
  
  start = function(){
    inquirer.prompt({
        
    })
  }