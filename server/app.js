const express=require("express")
const app=express()

const dotenv=require("dotenv")
dotenv.config()

const mongoose=require("mongoose")
mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DB Connected"))

const cors=require("cors")
app.use(cors())



const PORT= process.env.PORT
app.listen(PORT,()=>console.log(`Server is running on http://localhost:${PORT}`))