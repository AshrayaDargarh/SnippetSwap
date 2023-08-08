import mongoose from "mongoose";
import validator from "validator";
const {Schema}=mongoose

const userSchema= new Schema({
    userName:{type:String, required:true,minLength:[1,"User name Cant't be less than one character"],maxLength:[16,"User name Cant't be more than 16 characters"],unique:true},
    firstName:{type:String, required:true,minLength:[1,"Cant't less than one character"],maxLength:[16,"Cant't more than 16 characters"]},
    lastName:{type:String,required:true,maxLength:[16,"Cant't more than 16 characters"]},
    age:{type:Number,required:true,min:[12,"You are not eligible"],max:[100,"Cant't more than 100 character"]},
    email:{
        type:String,
        validate:[validator.isEmail,'invalid email'],
        unique:true,
        required:true
    },
    password:{
        type:String,
        min:6,
        required:true
    }
})

export const User=mongoose.model('User',userSchema)