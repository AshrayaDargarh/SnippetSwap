import express from "express"
import { getUserData } from "../controllers/user"
export const userRouter=express.Router()

userRouter
.get('/:id',getUserData)