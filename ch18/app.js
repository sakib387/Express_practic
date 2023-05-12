import express  from "express";
const app=express()
const port=3000
const DBURI="mongodb://0.0.0.0:27017"
import './models/students.js'
import connectDB from './db/connectdb.js'
 

// ejs setup
//app.set('views','./views')
//app.set('view engine','ejs')
//static file
//app.use(express.static(join(process.cwd(),'public')))
connectDB(DBURI);
app.listen(port,()=>{
    console.log(`app is runing on http://localhost:${port}`)
})