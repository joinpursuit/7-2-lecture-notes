 -- create our DB, call it buildings_db
 CREATE DATABASE buildings_db;

 -- create the following TABLE in lesson_db
    --buildings
        -- id
        -- address
        -- city
        -- state
        -- price
        -- haunted

CREATE TABLE  
    buildings(
        id SERIAL PRIMARY KEY,
        address TEXT NOT NULL,
        city TEXT,
        state VARCHAR(2),
        price INT,
        haunted BOOLEAN
        );
    
        -- styles array - sure - but big data  - no way
        -- slower to work with arrays 
   
 --  create a TABLE for ROOMS that links with our BUILDINGS
CREATE TABLE
    rooms(
        id SERIAL PRIMARY key,
        building_id INT NOT NULL,
        square_foot INT,
        room_number INT,
        for_sale BOOLEAN
    );

INSERT INTO 
    buildings(address, city, state, price, haunted)
VALUES
    ('100 ave', 'Computer', 'NY', 10000, true),
    ('22 mtn', 'Tacoburgh', 'CA', 1000, true ),
    ('18-68 st', 'Tacoburgh ', 'MD', 14200, false ),
    ('125 state', 'Place', 'LA', 2000, false),
    ('106 & park', 'Tacoburgh', 'CA', 1000, true),
    ('1550 New', 'Orcsville', 'TX', 1023120, false),
    ('123 123rd st', 'Fallout Village', 'VA', 10, false),
    ('22 22nd st', 'Disneyland', 'ND', 9000, false ),
    ('45 ave', 'Vacation Blvd', 'MD', 10321030, true),
    ('404 Not Found ST', 'Village People', 'AK', 123123332, true ),
    ('22990 JS blvd', 'Borgsburgh', 'AK', 122, false),
    ('3040 Ruby BLVD', 'Tacoburgh', 'AK', 55, false)


INSERT INTO 
    rooms(building_id, square_foot, room_number, for_sale)
 VALUES 

    ( (SELECT id FROM buildings WHERE address = '22 mtn'), 1500, 404, TRUE),
    ( (SELECT id FROM buildings WHERE address = '18-68 st'), 1500, 403, TRUE),
    ( (SELECT id FROM buildings WHERE address = '125 state'), 1500, 402, TRUE),
    ( (SELECT id FROM buildings WHERE address = '106 & park'), 1500, 1401, TRUE),
    ( (SELECT id FROM buildings WHERE address = '22 mtn'), 1500, 4, TRUE),
    ( (SELECT id FROM buildings WHERE address = '18-68 st'), 1500, 406, TRUE),
    ( (SELECT id FROM buildings WHERE address = '125 state'), 1500, 405, TRUE),
    ( (SELECT id FROM buildings WHERE address = '106 & park'), 1500, 404, TRUE),
    ( (SELECT id FROM buildings WHERE address = '22 22nd st'), 1500, 402, TRUE),
    ( (SELECT id FROM buildings WHERE address  = '45 ave'), 2000, 92, TRUE),
    ( (SELECT id FROM buildings WHERE address  = '45 ave'), 2500, 93, TRUE),
    ( (SELECT id FROM buildings WHERE address  = '45 ave'), 1500, 91, FALSE),
    ( (SELECT id FROM buildings WHERE address  = '404 Not Found ST'), 4000, 12328, FALSE),
    ( (SELECT id FROM buildings WHERE address  = '404 Not Found ST'), 4000, 40230, TRUE);


