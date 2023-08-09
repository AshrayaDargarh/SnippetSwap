import mongoose from "mongoose";
const {Schema}=mongoose

const viewSchema=new Schema({
    title:{type:String,required:true,default:'Untitled'},
    data:{type:String,required:true},
    intendedExpireAt:{type:Date,required:true},
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
})

export const View=mongoose.model('View',viewSchema)