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
    const count = await mongoose.model("Product").countDocuments();
    const nextId = count + 1;
    this.productId = `pro${String(nextId).padStart(2, "0")}`; 
  }
  next();
});





const ProductModel = mongoose.model("Product", productSchema);
export default ProductModel;
