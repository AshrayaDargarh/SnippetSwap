import express, { json } from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()
import { userRouter } from "./routes/user.js"

const app=express()

// db connection
main().catch(err=>console.log(err))
async function main()
{
    await mongoose.connect(process.env.MONGO_URL)
    console.log("DB Connected")
}

// middleware
app.use(json())
app.use('/user',userRouter)

app.get('/',(req,res)=>{
    res.json({success:true,message:"working fine"})
})


const PORT=process.env.PORT_URL || 4000
app.listen(PORT,()=>{
    console.log(`Server is listing at http://localhost:${PORT}`)
})