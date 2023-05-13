import express  from "express";
const app=express()
const port=3000
const DBURI="mongodb+srv://sakib:1234@cluster0.kdk4j0r.mongodb.net/mernstack"
import createDoc from  './models/student.js'
import connectDB from './db/connectdb.js'
 

// ejs setup
//app.set('views','./views')
//app.set('view engine','ejs')
//static file
//app.use(express.static(join(process.cwd(),'public')))
connectDB(DBURI);
createDoc()
app.listen(port,()=>{
    console.log(`app is runing on http://localhost:${port}`)
})