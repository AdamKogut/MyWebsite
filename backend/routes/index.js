var express = require("express");
var router = express.Router();

const keys = require("../SecretKeys/Keys");

/* GET home page. */
router.get("/keys", function(req, res, next) {
  res.send({
    ejs: keys.emailJs,
    rca: keys.recaptcha
  });
});

module.exports = router;
