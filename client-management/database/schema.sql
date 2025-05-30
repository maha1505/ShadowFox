-- Path: database/schema.sql
CREATE DATABASE IF NOT EXISTS client_app;

USE client_app;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);

INSERT INTO users (name, email) VALUES
('Maha', 'maha@example.com'),
('Ammu', 'ammu@example.com');
