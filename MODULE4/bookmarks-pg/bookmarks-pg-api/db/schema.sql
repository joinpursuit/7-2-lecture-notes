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

