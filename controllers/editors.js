const express = require('express');
var router = express.Router()

// Display the editors page
router.get("/", async function(req, res)
{

  //Restrict access to editor's page
  if (req.session.level == "editor") {
    res.render("editors", req.TPL);

  }
  else
  {
    res.redirect("/home");
  }
});

module.exports = router;
