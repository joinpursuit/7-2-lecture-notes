-- create the houses database, call it lesson_db
CREATE DATABASE lesson_db;
DROP DATABASE lesson_db;

-- Create the following table in lesson_db
    -- houses
        -- id
        -- address
        -- city
        -- st
        -- price 
        -- pool
        -- for_sale

CREATE TABLE 
    Houses(
        id SERIAL, 
        address TEXT NOT NULL, 
        city TEXT, 
        st VARCHAR(2), 
        price INT, 
        pool BOOLEAN DEFAULT false, 
        for_sale BOOLEAN
    );

-- add/drop a test string column
ALTER TABLE houses ADD COLUMN test TEXT;
ALTER TABLE houses DROP COLUMN test;

-- rename a column/table
ALTER TABLE houses RENAME st TO state;
ALTER TABLE Houses RENAME TO houses;

-- adding data
INSERT INTO
    houses(address, pool, price, state, city, for_sale)
VALUES
    ('99 Sunnyside Drive', TRUE, 100, 'NY', 'Springfield', true);

-- try your first SELECT query 
SELECT 
    *
FROM 
    houses;

-- adding minimum data 
INSERT INTO
    houses(address)
VALUES
    ('Graceland');

-- adding real data 
INSERT INTO
    houses (address, city, state, price, pool, for_sale)
VALUES
    ('2 Maple Court', 'Monroe', 'NY', 200, false, true),
    ('50 Beech Street', 'Bacon', 'IN', 75, null , null),
    ('101 Willow Avenue', 'Twin Peaks', 'WA', 300, null, null),
    ('2300 Orchard Lane', 'Monroe', 'NC', 150, null, true),
    ('57 Sycamore Boulevard', 'Monroe', 'CT', 275, false, false),
    ('88 Hemlock Grove', 'Eek', 'AK', 200, true, true),
    ('109 Pine Drive', 'Happyland', 'CT', 220, false, null);


-- lets play with our data 
-- display only the address column
SELECT
    address 
FROM 
    houses;
-- display only the address and state column
SELECT
    address, state 
FROM 
    houses;
-- display all the columns
SELECT
    *
FROM 
    houses;

-- select all rows from the houses table where the city column is set to 'Monroe'
SELECT 
    address, pool 
FROM 
    houses
WHERE 
    city = 'Monroe';

-- select all rows from the houses table where:

-- the state column is set to 'ny' or 'Ny' or 'NY' (case insensitive)
SELECT 
    * 
FROM 
    houses 
WHERE 
    state ILIKE 'ny';

-- the address column contains 'Drive'
SELECT 
    * 
FROM 
    houses
WHERE 
    address ILIKE '%Drive%';

-- the city column is set to 'Monroe' AND the state column is set to 'CT'
SELECT 
    *
FROM 
    houses 
WHERE 
    city = 'Monroe' AND state = 'CT';

-- either the pool column is set to TRUE OR the city column is set to 'Twin Peaks'
SELECT 
    * 
FROM 
    houses 
WHERE 
    pool = true OR city = 'Twin Peaks';

-- the price is set to 200
SELECT 
    * 
FROM 
    houses 
WHERE 
    price = 200;

-- the price column is not set to 180
SELECT 
    * 
FROM 
    houses 
WHERE 
    price != 180;

-- the price column is greater than 165
SELECT 
    * 
FROM 
    houses 
WHERE 
    price > 165;

-- the price column is less than 165
SELECT 
    * 
FROM 
    houses 
WHERE 
    price < 165;
    
-- the price column is greater than or equal to 165
SELECT 
    * 
FROM 
    houses 
WHERE 
    price >= 165;

-- the price column is less than or equal to 165
SELECT 
    * 
FROM 
    houses 
WHERE 
    price <= 165;

-- the price column is null
SELECT 
    * 
FROM 
    houses 
WHERE 
    price IS NULL;

-- the pool column has a value
SELECT 
    * 
FROM 
    houses 
WHERE 
    pool IS NOT NULL;