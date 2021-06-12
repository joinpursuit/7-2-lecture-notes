const users = require("express").Router();
const usersArray = require("../models/user");

// INDEX FOR USERS /users/
users.get("/", (req, res) => {
	// req.query; { bananas: 'Tim' };
  const queryString = req.query.apples;


	let filtered;
	if (queryString) {
		filtered = usersArray.filter(user => {
			return user.name === queryString;
		});
	}

  res.json(filtered || usersArray);
});

// "http://localhost:3001     /users     ?apples=Tim&bananas=somethingElse&car=bmw"
// "http://localhost:3001     /users     ?bananas=Tim"



module.exports = users; 

// GET /users  ----  