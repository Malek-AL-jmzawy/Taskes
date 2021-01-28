var express = require('express');
var router = express.Router();
const { Updatetasks, deletetasks, gettasks, addtasks } = require("./controller")
/* GET home page. */



/* tasks routes. */
router.put('/tasks/:tasks_id', Updatetasks);
router.delete('/tasks/:tasks_id', deletetasks);
router.post('/tasks', addtasks);
router.get('/tasks', gettasks);




module.exports = router;
