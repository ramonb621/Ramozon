DROP DATABASE IF EXISTS ramozon_db;

CREATE DATABASE ramozon_db;

USE ramozon_db;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NULL,
    department_name VARCHAR(50) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9072, "monster energy drink 24 pk", "food", 32.99, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1224, "marvel select 6 in. spider-man", "toys", 19.99, 8);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1432, "slim jims 32 pk", "food", 9.99, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9984, "gillete fusion 5 replacement razors 12pk", "hygiene", 24.99, 12);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0485, "hanes men's ankle-high socks 6 pk", "clothing", 14.99, 14);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9456, "nutro senior dog food 32 lb. bag", "pet food", 24.99, 8);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4524, "vizio 56 in. 1080p HDTV", "electronics", 999.99, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2495, "lego star wars 14 in. x-wing", "toys", 29.99, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8789, "iphone lightning cable", "electronics", 9.99, 12);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9043, "iphone otterbox case", "electronics", 59.99, 7);