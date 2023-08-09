import { User } from "../models/user";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export const signUp=async(req,res)=>{
    const user=await User(req.body)
    const secret=process.env.SECRET_KEY
    // const token=jwt.sign({userId:user._id},secret)
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

export const login=async(req,res)=>{
    try{
        const doc=await User.findOne({email:req.body.email})
        const isAuth=await bcrypt.compare(req.body.password,doc.password)
        if(isAuth)
        {
            const token=jwt.sign({userId:doc._id},process.env.SECRET_KEY,{expiresIn:'1d'})
            doc.save()
            res.json({token})
        }
    }
    catch(error)
    {
        res.status(400).json({message:"Invalid Email Or password"})
    }    
}
