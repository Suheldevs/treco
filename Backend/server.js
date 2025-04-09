import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url';
const app = express()
app.use(express.json())
dotenv.config()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/upload',express.static(path.join(__dirname,'upload')))


app.get('/',(req,res)=>{
    res.status(200).json({
       success:true,
       message:"Server is Running "
    })
  })
  
//routes

import ProductRoute from './routes/product.routes.js'
app.use('/product',ProductRoute)







// app.use("*", (req, res) => {
//     return res.status(404).json({ Message: "Route not found"});
// });





const mongodb_url = process.env.mongodb_url
const port = process.env.port

app.listen(port,()=>{console.log(`Server is running on port ${port}`)})

mongoose.connect(mongodb_url).then(()=>console.log('db connected')).catch((err)=>console.log('db not connected',err))