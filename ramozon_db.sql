DROP DATABASE IF EXISTS ramzon_db;

CREATE DATABASE ramzon_db;

USE ramozon_db;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NULL,
    department_name VARCHAR(50) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("monster energy drink 24 pk", "food", 32.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("marvel select 6 in. spider-man", "toys", 19.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("slim jims 32 pk", "food", 9.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("gillete fusion 5 replacement razors 12pk", 24.99, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("hanes men's ankle-high socks 6 pk", "clothing", 14.99, 14);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("nutro senior dog food 32 lb. bag", "pet food", 24.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("vizio 56 in. 1080p HDTV", "electronics", 999.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("lego star wars 14 in. x-wing", "toys", 29.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iphone lightning cable", "electronics", 9.99, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iphone otterbox case", "electronics", 59.99, 7);