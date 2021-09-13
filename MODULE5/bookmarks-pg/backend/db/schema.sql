DROP DATABASE IF EXISTS bookmarks_dev;

CREATE DATABASE bookmarks_dev;

\c bookmarks_dev;
-- how do we harden our DB?
CREATE TABLE bookmarks(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    url TEXT NOT NULL,
    category TEXT NOT NULL,
    is_favorite BOOLEAN NOT NULL DEFAULT FALSE 
);

CREATE TABLE reviews(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    reviewer TEXT NOT NULL,
    content TEXT NOT NULL,
    rating NUMERIC NOT NULL, CHECK (rating >=0 AND rating <= 5),
    bookmark_id INT REFERENCES bookmarks (id) 
        ON DELETE CASCADE 
);

-- INT = whole number 
-- NUMERIC = floats 