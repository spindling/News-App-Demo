const express = require('express');
var router = express.Router()
const UsersModel = require('../models/users.js')


// Display the editors page
router.get("/", async function(req, res)
{ 
    const users = await UsersModel.retrieveAllUsers();
   
    req.TPL.Users = users;
    res.render("editors", req.TPL);

});

module.exports = router;
