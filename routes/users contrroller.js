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

const login = async function (req, res, next) {
  console.log("data");
  const { email, password } = req.body
  const targetUser = await usersModule.find({ email: email })
  console.log("targetUser", targetUser);
  if (targetUser.length === 0) {
    res.json("this email is not correct")  
  }
  if (!await bcrypt.compare(password, targetUser[0].password)) {
    console.log("password incorrect");
    res.json("password incorrect")
  }
    const { user_name, user_pic, last_name, mobile, location, role_id } = targetUser[0]
    const payload = {
      user_name: user_name, user_pic: user_pic, last_name: last_name, email: email, mobile: mobile
      , location: location, password: password, role_id: role_id
    }
    const options = {
      expiresIn: process.env.TOKEN_EXPIRATION
    }
    const jwtUser =await jwt.sign(payload,process.env.SECRET,options)
    res.json(jwtUser)
  }

  const getUsers = async function (req, res, next) {
      res.json(await usersModule.find({}))
    }
/* GET users listing. */

module.exports = { register, login ,getUsers};
