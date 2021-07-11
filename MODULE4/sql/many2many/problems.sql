-- select all movies, thn actors, then castings.
-- see some joinings 

-- count how many actors form part of the 'Avengers' cast 
SELECT COUNT(*)
FROM castings 
WHERE castings.movie_id = (
    SELECT id 
    FROM movies 
    WHERE title = 'Avengers'
);

SELECT COUNT(*)
FROM castings 
JOIN movies ON movies.id = castings.movie_id
WHERE movies.title = 'Avengers';

-- find the lead actor for 'Iron Man'
SELECT actors.name
FROM actors 
JOIN castings ON castings.actor_id = actors.id
JOIN movies on movies.id = castings.movie_id
WHERE movies.title = 'Iron Man' AND castings.is_lead = TRUE

-- find which movie has a single actor
SELECT movies.title
FROM movies 
JOIN castings ON castings.movie_id = movies.id
GROUP BY movies.id
HAVING COUNT(castings.id) = 1;

-- count how many movies don't have lead actors
SELECT COUNT(*) AS non_lead_movies
FROM movies 
WHERE movies.id NOT IN (
    SELECT movies.id
    FROM movies 
    JOIN castings ON castings.movie_id = movies.id
    WHERE castings.is_lead = true 
);

-- list the names of the supporting actors for 'Thor'
SELECT actors.name
FROM actors 
JOIN castings ON castings.actor_id = actors.id
JOIN movies ON movies.id = castings.movie_id
WHERE movies.title = 'Thor' AND castings.is_lead = false


-- count how many movies were made in 1999
SELECT COUNT(*) 
FROM movies 
WHERE movies.year = 1999;

-- create a query to return the years that have more than one movie 
SELECT year 
FROM movies 
GROUP BY year
HAVING COUNT(movies.id) > 1;

-- select the movie with the largest cast 
SELECT movies.title, COUNT(castings.actor_id)
FROM movies 
JOIN castings ON castings.movie_id = movies.id
GROUP BY movies.id
ORDER BY COUNT(castings.movie_id) DESC
LIMIT 2;


-- find the actor that appears in the most movies
SELECT actors.name
FROM actors 
JOIN castings ON castings.actor_id = actors.id
GROUP BY actors.id 
ORDER BY COUNT(castings.id) DESC 
LIMIT 3;
