import express from "express";
const app=express()
const port=3000
 
import web from './route/web.js'

app.use('/',web)
app.listen(port,()=>{
    console.log(`app is runing on http://localhost:${port}`)
})
