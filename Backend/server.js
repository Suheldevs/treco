import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import cors from 'cors'
const app = express()
app.use(cookieParser());
app.use(express.json())
app.use(cors({origin:["https://treco-in.netlify.app","https://treco-admin.netlify.app","http://localhost:5173","http://localhost:5174"]}))
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

import inquiryRoutes from './routes/inquiry.routes.js';
app.use('/inquiry', inquiryRoutes);

import userRoutes from './routes/user.routes.js';
app.use('/admin', userRoutes);


import blogRoutes from './routes/blog.routes.js';
app.use('/blog', blogRoutes);

import careerRoutes from './routes/career.routes.js';
app.use('/career', careerRoutes);









// app.use("*", (req, res) => {
//     return res.status(404).json({ Message: "Route not found"});
// });





const mongodb_url = process.env.mongodb_url
const port = process.env.port

app.listen(port,()=>{console.log(`Server is running on port ${port}`)})

mongoose.connect(mongodb_url).then(()=>console.log('db connected')).catch((err)=>console.log('db not connected',err))