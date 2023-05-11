import mongoose from "mongoose";



/*const conectDB=(DBURI)=>{

    mongoose.connect(DBURI )
    .then(()=>{
        console.log('connected db')
    })
    .catch((err)=>{
        console.log('error hoice')
    })
}
*/
const conectDB= async(DBURI)=>{
 try{
    await mongoose.connect(DBURI);
    console.log('db connected successfully..')
 }
 catch(err){
   console.log('error occure in db')
 }
}
export default conectDB