import express from "express"
import { signUp,login } from "../controllers/auth"
export const authRouter=express.Router()

authRouter
.post('/signUp',signUp)
.post('/login',login)