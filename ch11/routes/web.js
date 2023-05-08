import express  from "express";
const route=express.Router()
import {homeControl} from '../controller/homeController.js'
route.get("/",homeControl)

export default route