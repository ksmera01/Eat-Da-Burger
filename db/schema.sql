DROP DATABASE IF EXISTS burger_DB;
CREATE database burger_DB;

USE burger_DB;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NULL,
  devour BOOLEAN default false,
  PRIMARY KEY (id)
);