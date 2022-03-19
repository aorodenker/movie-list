DROP DATABASE IF EXISTS movieDB;
CREATE DATABASE movieDB;

USE movieDB;

CREATE TABLE movies (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title varchar(255) NOT NULL
);


INSERT INTO movies (title) VALUES ('Mean Girls');
INSERT INTO movies (title) VALUES ('Hackers');
INSERT INTO movies (title) VALUES ('The Grey');
INSERT INTO movies (title) VALUES ('Sunshine');
INSERT INTO movies (title) VALUES ('Ex Machina');
