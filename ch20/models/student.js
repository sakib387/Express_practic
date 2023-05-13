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

const createDoc=async ()=>{
    try{
        const stuDoc=new stu({
            name:'sakib',
            age:22
         })
         
         const res=await stuDoc.save()
         console.log(res)
          
    }
    catch(err){
    console.log(err)
    }
}

const getAll=async ()=>{
    const result=await stu.find()
    console.log(result)
}

 
export {getAll,createDoc}