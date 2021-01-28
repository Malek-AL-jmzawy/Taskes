var express = require('express');
var router = express.Router();
const {  addtasks } = require("./controller")
/* GET home page. */

/* TEST. */
router.post('/tasks', addtasks);





module.exports = router;
