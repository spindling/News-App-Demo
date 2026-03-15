const express = require('express');
var router = express.Router()
const UsersModel = require('../models/users.js')
const bcrypt = require('bcrypt');

// Displays the login page
router.get("/", async function(req, res)
{
  // if we had an error during form submit, display it, clear it from session
  req.TPL.signup_error = req.session.signup_error;
  req.session.signup_error = "";

  // render the login page
  res.render("signup", req.TPL);
});


router.post("/attemptsignup", async function(req, res)
{
    //validation
    if (req.body.username.length < 6 || req.body.password.length < 6)
    {
        req.session.signup_error = "Username/password cannot be less than 6 characters in length!"
        res.redirect("/signup");
    }

});

module.exports = router;
