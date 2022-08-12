DROP DATABASE IF EXISTS  chat;
CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE Users (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  username text NOT NULL,
  primary key(id)
);

CREATE TABLE Messages (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  username text NOT NULL,
  message text NOT null,
  roomname text NULL,
  primary key(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- INSERT INTO table1
--        VALUES (2,2205,2022);
--        mysql Show schemas;

-- In MySQL, physically, a schema is synonymous with a database. You can substitute the keyword SCHEMA instead of DATABASE in MySQL SQL syntax, for example using CREATE SCHEMA instead of CREATE DATABASE.


-- foreign key(class_id) references classes(id),

-- SHOW {DATABASES | SCHEMAS}
--     [LIKE 'pattern' | WHERE expr]