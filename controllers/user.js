import { User } from "../models/user";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const secret=process.env.SECRET_KEY

export const signUp=async(req,res)=>{
    const user=await User(req.body)
    const token=jwt.sign({userId:user._id},'sssssss')
    const saltRounds = 10;
    const hash=bcrypt.hashSync(req.body.password,saltRounds)    
    user.password=hash
    try{
        const doc=await user.save()

        res.status(201).json({token,doc});
    }
    catch(err)
    {
        res.status(401).json(err)
    }
}