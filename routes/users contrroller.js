const { usersModule } = require("../schema")
const bcrypt = require("bcrypt")
require("dotenv").config()
const jwt = require('jsonwebtoken');


const register = async function (req, res, next) {
  console.log("data");

  const { user_name, user_pic, last_name, email, mobile, location, password, role_id } = req.body

  const oldUser=await usersModule.find({email:email})
  if (oldUser.length!==0) { 
   return res.json("the account is created already ") 
  }
  const hashedPass = await bcrypt.hash(password, Number(process.env.SALT))
  console.log("data");
  const data = {
    user_name: user_name, user_pic: user_pic, email: email, mobile: mobile
    , location: location, password: hashedPass, role_id: role_id
  }
  console.log(data);
  const newUser = await new usersModule(data).save((err,res)=>{if(err) throw err})
  res.json(`wellcome ${user_name}`)
}



module.exports = { register};
