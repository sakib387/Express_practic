import express from "express";
import { home } from "../controller/home.js";
import { about } from "../controller/about.js";
const route=express.Router()

route.get('/',home)
route.get('/about',about)

export default route