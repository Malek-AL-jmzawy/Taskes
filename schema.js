const mongoose= require("mongoose")
const bcrypt = require('bcrypt')
const tasks = new mongoose.Schema({
    id:{type:Number,require:true,unique:false},
    updated_at:{type:String,require:false},
    created_at:{type:String,require:true},  
    first_name:{type:String,require:true},  
    last_name:{type:String,require:true},  
    mobile:{type:String,require:true},  
    email:{type:String,require:true},  
    location_type:{type:String,require:true},  
    location_string:{type:String,require:true},  
    status:{type:String,require:false},  
    communication:{type:String,require:false},  
    tags:{type:String,require:false}
})

const users = new mongoose.Schema({
    user_name:{type:String,require:false},
    role_id:{type:String,require:false},
    user_pic:{type:String,require:true},  
    email:{type:String,require:true,unique:true},  
    mobile:{type:String,require:true},  
    location:{type:String,require:true},  
    password:{type:String,require:true},
    status:{type:String,require:false},  
})

const tasksModule =mongoose.model("tasks",tasks)
const usersModule=mongoose.model("users",users)

module.exports ={tasksModule,usersModule}