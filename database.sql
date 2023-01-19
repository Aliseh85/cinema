CREATE DATABASE mydatabase;
USE mydatabase;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    phone VARCHAR(255) UNIQUE,
    password VARCHAR(255)
	subscription_range  INT
);
INSERT INTO users (id ,username, phone, password, subscription_range)
VALUES (1,'John','12345678','password123',3);

