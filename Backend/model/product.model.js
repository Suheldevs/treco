import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true, 
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  subCategory: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    trim: true
  },
  features: {
    type: [String]
  },
  productId: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true });  

const ProductModel = mongoose.model("Product", productSchema);
export default ProductModel;
