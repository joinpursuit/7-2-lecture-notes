# JOINS and QUERIES

## Agenda

1. Data Modeling - What is it and Why do we use it?
    - Database Normalization Overview 
        We make use multiple tables to keep our data readable and to prevent redundancies.
        What happens when our data gets too large for one table?  See badBuildingsSchema.png.
        We split into multiple table to keep things ordered and connect them across data points.  See housesBuildingsSchema.png and note how rooms have a BUILDING_ID that coresponds to our building ID.
    - Table relationships
        One to Many -  A building has many rooms but a room can only have one building.
        MAny to Many - A building may have many owners and those owners may own many buildings.
  
2. What is a JOIN ?  Why use it?
    - JOIN allows us to combine tables that relate to one another based on the conditionals we pass our ON clause;
        example:  
            `SELECT * FROM buildings JOIN ROOMS
                ON buildings.id = rooms.building_id;`   <---- only return a combined table of records that satisfy this condition
    - Inner - IMPLICIT if we only write JOIN
        returns ONLY those records which pass conditional from BOTH statements
    - Left
        - this will return everything from the FIRST table we write in the JOIN 
            regardless of its ON coniditoinal passing
             
             `SELECT * FROM buildings LEFT JOIN ROOMS
                ON buildings.id = rooms.building_id`;
    - Right
        - this will return everything from the SECOND table we write in the JOIN
            regardless of whether or not it passes the ON conditional
             
             `SELECT * FROM buildings RIGHT JOIN ROOMS
                ON buildings.id = rooms.building_id`;
    - Full 
        - returns everything regardless of whether it passes the ON conditional
          
             `SELECT * FROM buildings FUKK OUTER JOIN ROOMS
                ON buildings.id = rooms.building_id`;


    
