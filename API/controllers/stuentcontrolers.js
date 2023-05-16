import stumodel from "../models/student.js";
 

class StudentControler{
    static creactDoc=async(req,res)=>{
        try{
           // const {name,age,fees}=req.body
           /*
            const doc=new SutdentModel({
                name:name,
                age:age,
                fees:fees
            })
             const result =await doc.save()
             res.send(result)
  */
             const {name}=req.body
    res.send(name)
        }
        catch(er){
            console.log(er)
        }
    }

    static getallDoc=async(req,res)=>{
        //res.send('all doc')
        try{
            const result=await stumodel.find()
            res.send(result)
        }
        catch(er){
            console.log(er)
        }
    }
    static getaByid=async(req,res)=>{
        try{
            const result=await stumodel.findById(req.params.id)
            res.send(result)
        }
        catch(er){
            console.log(er)
        }
    }
      static updatebyid=async(req,res)=>{
            try{
             const result=await stumodel.findByIdAndUpdate(req.params.id,req.body)
             res.send(result)
            }
            catch(er){
                console.log(er)
            }
    }

    static deletebyId=async(req,res)=>{
       try{
        const result=await stumodel.findByIdAndDelete(req.params.id)
        res.send(result)
       }
       catch(er){
        console.log(er)
       }
    }

}

export default StudentControler