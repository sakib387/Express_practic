//const express=require('express')
import express from "express";
const app=express();
const port=300;

app.get('/',(req,res)=>{
    res.send('hellow sakib');
})
 

app.listen(port,()=>{
    console.log(`run at http://localhost:${port}`);
})