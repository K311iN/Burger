DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(128) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured)
VALUES ("The Ultimate Burger", TRUE);

INSERT INTO burgers (burger_name, devoured)
VALUES ("The Bacon Burger", FALSE);

INSERT INTO burgers (burger_name, devoured)
VALUES ("The Cheesy Burger", TRUE);