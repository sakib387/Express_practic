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
            name:'rakib',
            age:22
         })
         
         const res=await stuDoc.save()
         console.log(res)
          
    }
    catch(err){
    console.log(err)
    }
}

 
export default createDoc