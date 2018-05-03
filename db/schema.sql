DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE coffee_db;

USE coffee_db;

CREATE TABLE coffee (
    id INT(10) NOT NULL AUTO_INCREMENT,
    coffee_name VARCHAR(150) NOT NULL,
    drank BOOLEAN default false,
    PRIMARY KEY (id)
);