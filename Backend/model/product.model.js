import mongoose from "mongoose";
import Counter from './couter.model.js'
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
  subcategory: {
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
  features: [
    {
      label: { type: String, required: true },
      value: { type: String, required: true }
    }
  ],
  productId: {
    type: String,
  }
}, { timestamps: true });  


productSchema.pre("save", async function (next) {
  if (this.isNew) {
    const counter = await Counter.findByIdAndUpdate(
      { _id: "productId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    this.productId = `pro${String(counter.seq).padStart(2, "0")}`;
  }
  next();
});





const ProductModel = mongoose.model("Product", productSchema);
export default ProductModel;
