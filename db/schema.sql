-- BURGER SCHEMA -- 
CREATE DATABASE icecream_db; 
USE icecream_db; 

CREATE TABLE icecreams
(
    id int NOT NULL AUTO_INCREMENT, 
    name varchar(80) NOT NULL, 
    devoured BOOLEAN DEFAULT false, 
    PRIMARY KEY (id)
);