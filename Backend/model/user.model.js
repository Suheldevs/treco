import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
}, { timestamps: true })

const userModel = mongoose.model("admin",userSchema)

export default userModel