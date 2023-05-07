import express from "express";
const app=express()
const port=3000

 

app.get('/student/:id([0-9]{2})',(req,res)=>{
    const id=req.params.id
    res.send(`delete with id ${id}`)
})


app.listen(port,()=>{
    console.log(`app is runing on http://localhost:${port}`)
})
