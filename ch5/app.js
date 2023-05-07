
import express  from "express";
const app=express()
const port=3000;

//Route 
app.get('/all',(req,res)=>{
    res.send('sakib get ')
})
app.get('/',(req,res)=>{
    res.send('sakib get date')
    
})
app.get(/a/,(req,res)=>{
    res.write('sadflkjalk')
     
})
app.get('*',(req,res)=>{
    res.send('error get date')
})
app.listen(port,()=>{
    console.log(`app is runing on http://localhost:${port}`)
})