import express from "express"
import { signUp } from "../controllers/user"
export const userRouter=express.Router()

userRouter
.post('/signUp',signUp)