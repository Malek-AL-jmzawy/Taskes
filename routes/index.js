var express = require('express');
const { NotExtended } = require('http-errors');
var router = express.Router();


router.get("/",(res,req,next)=>res.json("hallo world"))


module.exports = router;
