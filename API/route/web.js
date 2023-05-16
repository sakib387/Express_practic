
import express  from "express";

const route=express.Router()

import StudentControler from "../controllers/stuentcontrolers.js";


route.get('/',StudentControler.getallDoc)
route.post('/',StudentControler.creactDoc)
route.get('/:id',StudentControler.getaByid)
route.put('/:id',StudentControler.updatebyid)
route.delete('/:id',StudentControler.deletebyId)


export default route