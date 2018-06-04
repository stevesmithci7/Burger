DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger (
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY (id)
);


INSERT INTO burger (burger_name, devoured) VALUES 
("The Big Kahuna", false),
("Three Cheesus", falseburger), 
("Bernard", false)