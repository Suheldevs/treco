import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        title: { type: String, required: true,unique: true, },
        slug: { type: String, required: true },
        category: { type: String, required: true },
        description: { type: String, required: true },
        postedBy: { type: String, required: true,default:'Admin' },
        imageUrl:{type:String,required:true},
    },
    { timestamps: true } 
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;