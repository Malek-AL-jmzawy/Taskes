var express = require('express');
var router = express.Router();
const { errApi, handelError, Updatetasks, deletetasks, gettasks, addtasks } = require("./controller")
const { register, login,getUsers } = require("./users contrroller")
/* GET home page. */

/* TEST. */
router.get('/', (req,res)=>{
    res.json("hallo world")
});

router.post('/tasks', addtasks);

router.get('/tasks', gettasks);

/* questions routes. */
router.put('/tasks/:tasks_id', Updatetasks);
router.delete('/tasks/:tasks_id', deletetasks);


router.put("/user", login);
router.post('/user', register);
router.get('/user', getUsers);
/* error handle routes. */
router.all("*", errApi)
router.use(handelError);



module.exports = router;
