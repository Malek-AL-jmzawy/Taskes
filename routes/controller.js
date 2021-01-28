const { tasksModule } = require("../schema")

/* Controller. */
var newId = 0

const addtasks = async (req, res, next) => {
  const { first_name,mobile, last_name, email,location_type,location_string} = req.body
  let result = {
    id: newId,
    first_name: first_name,
    last_name: last_name,
    email: email,
    mobile: mobile,
    location_type: location_type,
    location_string: location_string,
    last_name: last_name,
    email: email
  }
  const newtasks = await new tasksModule(result).save((err, result) => {
    if (err) { console.log(err); }
    else { console.log(result) }
  })
  newId++
  res.status(201)
  res.json(result)
}

const gettasks = async (req, res, next) => {
  res.json(await tasksModule.find({}))
}

const deletetasks = async (req, res, next) => {
  const {tasks_id}=req.params
  res.json(await tasksModule.deleteOne({id:tasks_id}))
}

const Updatetasks = async (req, res, next) => {
  const {tasks_id}=req.params
  const {communication}=req.body
  res.json(await tasksModule.updateOne({id:tasks_id},{
    communication: communication
    }))
}

/* handeling Error Controller. */

const errApi = (req, res, next) => {
  const newErorr = new Error("{}")
  res.status(404).json({})
}

const handelError = (err, req, res, next) => {
  res.status(err.status);
  // send the response in JSON format
  res.json({
    error: {
      status: err.status,
      message: err.message,
    },
  });
}
module.exports = { errApi, handelError,Updatetasks ,deletetasks,gettasks,addtasks}
