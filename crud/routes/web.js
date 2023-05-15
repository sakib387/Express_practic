import express  from "express";
const route=express.Router()


import {getAll,create,edit,update,deletest}  from '../contollers/studentscon.js'
route.get('/',getAll)
route.post('/',create)
route.get('/edit/:id',edit)
route.post('/update/:id',update)
route.post('/delete/:id',deletest)



export default route