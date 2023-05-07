import express from "express";
const app=express()
const port=3000

import stu from './Route/student.js'



app.use('/student',stu)
app.listen(port,()=>{
    console.log(`app is runing on http://localhost:${port}`)
})
