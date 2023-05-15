import mongoose from "mongoose";



 
const conectDB= async(DBURI)=>{
 try{
    const option={
       
        dbName:'school',
         
    }
    await mongoose.connect(DBURI,option);
    console.log('db connected successfully..')
 }
 catch(err){
   console.log('error occure in db')
 }
}
export default conectDB