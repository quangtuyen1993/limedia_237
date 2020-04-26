var express = require('express');
var router = express.Router();
var UserModel=require("../models/user")

/* GET users listing. */
router.get('/', async(req, res, next)=> {
  var users= await UserModel.find();
  res.status(200).send(users);
});

module.exports = router;
