import express  from "express";
const router=express.Router()

router.get('/all',(req,res)=>{
    res.send('all student');
})
router.get('/one',(req,res)=>{
    res.send('one student');
})



export default router