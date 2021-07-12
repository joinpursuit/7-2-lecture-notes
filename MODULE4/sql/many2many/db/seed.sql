\c many_to_many_db;

-- seed movies 
INSERT INTO
    movies(title, year)
VALUES
    ('Avengers', 2012),
    ('Iron Man', 2008),
    ('Captain America', 2011),
    ('Spider Man', 2019),
    ('Thor', 2011),
    ('Sixth Sense', 1999),
    ('The Fifth Element', 1997),
    ('Twelve Monkeys', 1995),
    ('Fight Club', 1999),
    ('Titanic', 1997);

-- seed actors
INSERT INTO
    actors(name)
VALUES 
    ('Robert Downy Jr'),
    ('Mark Ruffalo'),
    ('Sam L Jackson'),
    ('Scarlett Johansson'),
    ('Chris Evans'),
    ('Chris Hemsworth'),
    ('Anthony Mackie'),
    ('Tom Hiddleston'),
    ('Tom Holland'),
    ('Jon Favreau'),
    ('Gwyneth Paltrou'),
    ('Sebastian Stan'),
    ('Elizabeth Olsen'),
    ('Frank Grillo'),
    ('Zendaya'),
    ('Jake Gyllenhaal'),
    ('Jacob Batalon'),
    ('Marisa Tomei'),
    ('Natalie Portman'),
    ('Jaimie Alexander'),
    ('Anthony Hopkins'),
    ('Idris Elba'),
    ('Halay Osment'),
    ('Bruce Willis'),
    ('Toni Collette'),
    ('Donnie Wahlberg'),
    ('Olivia Williams'),
    ('Milla Jovovich'),
    ('Gary Oldman'),
    ('Chris Tucker'),
    ('Brad Pitt'),
    ('Madeleine Stowe'),
    ('Christopher Plummer'),
    ('Jon Seda'),
    ('David Morse'),
    ('Edward Norton'),
    ('Helena Carter'),
    ('Jared Leto'),
    ('Meat Loaf'),
    ('Holt McCallany'),
    ('Leo Di Caprio');

-- seed castings 
INSERT INTO 
    castings(actor_id, movie_id, is_lead)
VALUES
    -- Avengers
    (
        (SELECT id FROM actors WHERE name = 'Robert Downy Jr'),
        (SELECT id FROM movies WHERE title = 'Avengers'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Mark Ruffalo'),
        (SELECT id FROM movies WHERE title = 'Avengers'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Sam L Jackson'),
        (SELECT id FROM movies WHERE title = 'Avengers'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Scarlett Johansson'),
        (SELECT id FROM movies WHERE title = 'Avengers'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Chris Evans'),
        (SELECT id FROM movies WHERE title = 'Avengers'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Chris Hemsworth'),
        (SELECT id FROM movies WHERE title = 'Avengers'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Anthony Mackie'),
        (SELECT id FROM movies WHERE title = 'Avengers'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Tom Hiddleston'),
        (SELECT id FROM movies WHERE title = 'Avengers'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Tom Holland'),
        (SELECT id FROM movies WHERE title = 'Avengers'),
        FALSE
    ),
    -- Iron Man
    (
        (SELECT id FROM actors WHERE name = 'Robert Downy Jr'),
        (SELECT id FROM movies WHERE title = 'Iron Man'),
        TRUE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Jon Favreau'),
        (SELECT id FROM movies WHERE title = 'Iron Man'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Gwyneth Paltrou'),
        (SELECT id FROM movies WHERE title = 'Iron Man'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Sam L Jackson'),
        (SELECT id FROM movies WHERE title = 'Iron Man'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Scarlett Johansson'),
        (SELECT id FROM movies WHERE title = 'Iron Man'),
        FALSE
    ),
    -- Captain America 
    (
        (SELECT id FROM actors WHERE name = 'Chris Evans'),
        (SELECT id FROM movies WHERE title = 'Captain America'),
        TRUE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Sebastian Stan'),
        (SELECT id FROM movies WHERE title = 'Captain America'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Scarlett Johansson'),
        (SELECT id FROM movies WHERE title = 'Captain America'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Sam L Jackson'),
        (SELECT id FROM movies WHERE title = 'Captain America'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Elizabeth Olsen'),
        (SELECT id FROM movies WHERE title = 'Captain America'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Frank Grillo'),
        (SELECT id FROM movies WHERE title = 'Captain America'),
        FALSE
    ),
    -- Spider Man
    (
        (SELECT id FROM actors WHERE name = 'Tom Holland'),
        (SELECT id FROM movies WHERE title = 'Spider Man'),
        TRUE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Zendaya'),
        (SELECT id FROM movies WHERE title = 'Spider Man'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Jake Gyllenhaal'),
        (SELECT id FROM movies WHERE title = 'Spider Man'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Jacob Batalon'),
        (SELECT id FROM movies WHERE title = 'Spider Man'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Marisa Tomei'),
        (SELECT id FROM movies WHERE title = 'Spider Man'),
        FALSE
    ),
    -- Thor
    (
        (SELECT id FROM actors WHERE name = 'Chris Hemsworth'),
        (SELECT id FROM movies WHERE title = 'Thor'),
        TRUE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Natalie Portman'),
        (SELECT id FROM movies WHERE title = 'Thor'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Tom Hiddleston'),
        (SELECT id FROM movies WHERE title = 'Thor'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Jaimie Alexander'),
        (SELECT id FROM movies WHERE title = 'Thor'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Anthony Hopkins'),
        (SELECT id FROM movies WHERE title = 'Thor'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Idris Elba'),
        (SELECT id FROM movies WHERE title = 'Thor'),
        FALSE
    ),
    -- Sixth Sense
    (
        (SELECT id FROM actors WHERE name = 'Halay Osment'),
        (SELECT id FROM movies WHERE title = 'Sixth Sense'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Bruce Willis'),
        (SELECT id FROM movies WHERE title = 'Sixth Sense'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Toni Collette'),
        (SELECT id FROM movies WHERE title = 'Sixth Sense'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Donnie Wahlberg'),
        (SELECT id FROM movies WHERE title = 'Sixth Sense'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Olivia Williams'),
        (SELECT id FROM movies WHERE title = 'Sixth Sense'),
        FALSE
    ),
    -- The Fifth Element
    (
        (SELECT id FROM actors WHERE name = 'Milla Jovovich'),
        (SELECT id FROM movies WHERE title = 'The Fifth Element'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Bruce Willis'),
        (SELECT id FROM movies WHERE title = 'The Fifth Element'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Gary Oldman'),
        (SELECT id FROM movies WHERE title = 'The Fifth Element'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Chris Tucker'),
        (SELECT id FROM movies WHERE title = 'The Fifth Element'),
        FALSE
    ),
    -- Twelve Monkeys
    (
        (SELECT id FROM actors WHERE name = 'Brad Pitt'),
        (SELECT id FROM movies WHERE title = 'Twelve Monkeys'),
        TRUE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Madeleine Stowe'),
        (SELECT id FROM movies WHERE title = 'Twelve Monkeys'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Bruce Willis'),
        (SELECT id FROM movies WHERE title = 'Twelve Monkeys'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Christopher Plummer'),
        (SELECT id FROM movies WHERE title = 'Twelve Monkeys'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Jon Seda'),
        (SELECT id FROM movies WHERE title = 'Twelve Monkeys'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'David Morse'),
        (SELECT id FROM movies WHERE title = 'Twelve Monkeys'),
        FALSE
    ),
    -- Fight Club
    (
        (SELECT id FROM actors WHERE name = 'Brad Pitt'),
        (SELECT id FROM movies WHERE title = 'Fight Club'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Edward Norton'),
        (SELECT id FROM movies WHERE title = 'Fight Club'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Helena Carter'),
        (SELECT id FROM movies WHERE title = 'Fight Club'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Jared Leto'),
        (SELECT id FROM movies WHERE title = 'Fight Club'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Meat Loaf'),
        (SELECT id FROM movies WHERE title = 'Fight Club'),
        FALSE
    ),
    (
        (SELECT id FROM actors WHERE name = 'Holt McCallany'),
        (SELECT id FROM movies WHERE title = 'Fight Club'),
        FALSE
    ),
    -- Titanic
    (
        (SELECT id FROM actors WHERE name = 'Leo Di Caprio'),
        (SELECT id FROM movies WHERE title = 'Titanic'),
        TRUE
    );