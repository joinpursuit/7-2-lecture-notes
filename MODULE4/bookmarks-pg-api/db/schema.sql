DROP DATABASE IF EXISTS bookmarks_dev;

CREATE DATABASE bookmarks_dev;

\c bookmarks_dev;
-- how do we harden our DB?
CREATE TABLE bookmarks(
    id SERIAL PRIMARY KEY,
    name TEXT ,
    url TEXT ,
    category TEXT,
    is_favorite BOOLEAN 
);

