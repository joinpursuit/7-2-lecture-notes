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

-- adding minimum data 
INSERT INTO
    houses(address)
VALUES
    ('Graceland');

-- adding real data 
INSERT INTO
    houses (address, city, st, price, pool, for_sale)
VALUES
    ('2 Maple Court', 'Monroe', 'NY', 200, false, true),
    ('50 Beech Street', 'Bacon', 'IN', 75, null , null),
    ('101 Willow Avenue', 'Twin Peaks', 'WA', 300, null, null),
    ('2300 Orchard Lane', 'Monroe', 'NC', 150, null, true),
    ('57 Sycamore Boulevard', 'Monroe', 'CT', 275, false, false),
    ('88 Hemlock Grove', 'Eek', 'AK', 200, true, true),
    ('109 Pine Drive', 'Happyland', 'CT', 220, false, null);


-- lets play with our data 
-- select all rows from the houses table.  display only the address column
-- select all rows from the houses table.  display only the address and state column
-- select all rows from the houses table.  display only the all columns
-- select all rows from the houses table where the name column is set to 'Monroe'
-- select all rows from the houses table where the name column is set to 'ny' or 'Ny' or 'NY' (case insensitive)
-- select all rows from the houses table where the name column contains 'Drive'
-- select all rows from the houses table where the city column is set to 'Monroe' AND the state column is set to 'CT'
-- select all rows from the houses table where either the pool column is set to TRUE OR the city column is set to 'Twin Peaks'
-- select all rows from the houses table where the price is set to 200
-- select all rows from the houses table where the price column is not set to 180
-- select all rows from the houses table where the price column is greater than 165
-- select all rows from the houses table where the price column is less than 165
-- select all rows from the houses table where the price column is greater than or equal to 165
-- select all rows from the houses table where the price column is less than or equal to 165
-- select all rows from the houses table where the price column is null
-- select all rows from the houses table where the pool column has a value