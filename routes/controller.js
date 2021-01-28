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

module.exports = { addtasks}
