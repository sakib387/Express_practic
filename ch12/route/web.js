import express  from "express";

const route=express.Router()
import {homepage} from '../controller/home.js'
import { aboutepage } from "../controller/about.js";

route.get('/',homepage)
route.get('/about',aboutepage)

export default route