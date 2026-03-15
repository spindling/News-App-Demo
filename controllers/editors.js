const express = require('express');
var router = express.Router()

// Display the editors page
router.get("/", async function(req, res)
{
    res.render("/editors", req.TPL);

});

function editorAccess(req,res,next)
{
    //Restrict access to editor's page
  if (req.session.level == "editor")
  {
    next();
  }
  else
  {
    res.redirect("/home");
  }

}

router.use(editorAccess);
module.exports = router;
