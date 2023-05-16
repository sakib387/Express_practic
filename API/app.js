import express  from "express"
import bodyParser from "body-parser";
const app=express()
const port=3000
const DBURI="mongodb://0.0.0.0:27017"
//import {getAll,createDoc ,getspecificfield}from './models/student.js'
import connectDB from './db/connectdb.js'
import web from './route/web.js'
 
 
connectDB(DBURI);

app.use("/",web)
app.use(bodyParser.json());
app.use(express.json())
 
app.listen(port,()=>{
    console.log(`app is runing on http://localhost:${port}`)
})