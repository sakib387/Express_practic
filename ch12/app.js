import express  from "express";
const app=express()
const port=3000
import {join } from "path"

import web from './route/web.js'


// ejs setup
app.set('views','./views')
app.set('view engine','ejs')
//static file
app.use(express.static(join(process.cwd(),'public')))
app.use('/',web)
app.listen(port,()=>{
    console.log(`app is runing on http://localhost:${port}`)
})