import express  from "express";
const app=express()
const port =3000
import web from './routes/web.js'
//static file
app.use(express.static('public'))
app.use('/sakib',web)
app.listen(port,()=>{
    console.log(`app is runing on http://localhost:${port}`)
})