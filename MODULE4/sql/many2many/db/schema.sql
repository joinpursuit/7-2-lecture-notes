DROP DATABASE IF EXISTS many_to_many_db;
CREATE DATABASE many_to_many_db;

\c many_to_many_db;

DROP TABLE IF EXISTS movies;
CREATE TABLE movies(
    id SERIAL PRIMARY KEY, 
    title TEXT NOT NULL, 
    year INT NOT NULL
);

DROP TABLE IF EXISTS actors;
CREATE TABLE actors(
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL
);

DROP TABLE IF EXISTS castings;
CREATE TABLE castings(
    id SERIAL PRIMARY KEY, 
    actor_id INT REFERENCES actors (id), 
    movie_id INT REFERENCES movies (id), 
    lead_actor_id INT REFERENCES actors (id)
);
    