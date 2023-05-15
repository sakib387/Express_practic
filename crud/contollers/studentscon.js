
import SutdentModel from '../models/student.js'
const getAll=async(req,res)=>{
    try{

        const result=await SutdentModel.find()
        res.render('index.ejs',{data:result})
    }
    catch(er){
       console.log(er)
    }
}

const create=async (req,res)=>{
  try{
    const {name,age,fees}=req.body
    const doc=new SutdentModel({
        name:name,
        age:age,
        fees:fees
    })
    const result=doc.save()
    console.log(result)
       res.redirect("/")
   
  }
  catch(err){
    console.log(err)
  }
}


const update=async(req,res)=>{
    try{
       const result=await SutdentModel.findByIdAndUpdate(req.params.id,req.body)
      // console.log(req.params.id)
         res.redirect("/")
    }
    catch(er){
        console.log(er)
    }
}

const deletest =async(req,res)=>{
    try{
         const result=await SutdentModel.findByIdAndDelete(req.params.id)
        res.redirect("/")
    }
    catch(er){
        console.log(er)
    }
}
const edit=async(req,res)=>{
    try{
        const result= await SutdentModel.findById(req.params.id)
        res.render('edit.ejs',{data:result})
    }
    catch(er){
        console.log(er)
    }
}

export {getAll,create,update,edit,deletest}