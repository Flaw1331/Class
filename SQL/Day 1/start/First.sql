CREATE DATABASE animals_db;
-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS animals_db;
-- Creates the "favorite_db" database --
CREATE DATABASE animals_db;

USE animals_db;

CREATE TABLE people (
  name VARCHAR(30) NOT NULL, -- String of length 30. Can't be null
  has_pet BOOLEAN NOT NULL, -- bool. Can't be null
  pet_name VARCHAR(30),
  pet_age INTEGER(10) -- unsigned int has the max value of 4294967295 no matter if its INT(1) or int(10) and will use 4 bytes of data.
);

create database favorites_db;

drop database if exists favorites_db;

create database favorites_db;

use favorites_db;

CREATE TABLE favorite_foods (
  food VARCHAR(50) NOT NULL,
  score integer(10)
);

CREATE TABLE favorite_songs (
song VARCHAR(100) NOT NULL,
artist VARCHAR(50),
score integer(10)
);

CREATE TABLE favorite_movies (
film VARCHAR(100) NOT NULL,
five_times BOOLEAN,
score INTEGER(10)
);


use animals_db;
select * from people;
INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Jacob", true, "Misty", 10);

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Ahmed", true, "Rockington", 100);

INSERT INTO people (name, has_pet)
VALUES ("Peter", false);

UPDATE people
SET has_pet = true
WHERE name = "Peter";

SELECT * FROM people;

