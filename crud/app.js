import express  from "express"
import {join} from 'path'
const app=express()
const port=3000
import web from "./routes/web.js"
const DBURI="mongodb://0.0.0.0:27017"
//import {}from './models/student.js'
import connectDB from './db/connectdb.js'
 

connectDB(DBURI);

app.use(express.urlencoded({extended:false}))
//static file
app.use(express.static(join(process.cwd(),"public")))
app.use('/edit',express.static(join(process.cwd(),"public")))
//set template
app.set('views','views')
app.set('view engine','ejs')

app.use('',web)
 
app.listen(port,()=>{
    console.log(`app is runing on http://localhost:${port}`)
})