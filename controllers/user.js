import { User } from "../models/user";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export const getUserData=async(req,res)=>{
    const user=await User(req.body)
    const secret=process.env.SECRET_KEY
    const token=jwt.sign({userId:user._id},secret)
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

