import mongoose  from "mongoose";


const studentschema=new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number},
   
})

const teacherschema=new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number},
   
})

const stu =mongoose.model('student',studentschema)
const tea =mongoose.model('teacher',teacherschema)