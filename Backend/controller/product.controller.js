import Product from '../model/product.model.js';
import ApiError from '../middleware/Error.middleware.js';
import slugify from 'slugify';
import path from 'path';
import fs from 'fs';

const saveProduct = async (req, res, next) => {
  try {
    const { name, category, subCategory, description, features } = req.body;

    if (!name || !category || !subCategory) {
      return next(ApiError('All fields are required', 400));
    }

    const file = req.file;
    let imagePath = '';

    if (file) {
      const uploadDir = path.join(process.cwd(), 'upload/product');
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const filename = `${Date.now()}_${file.originalname}`;
      imagePath = path.join('upload/product', filename);
      fs.writeFileSync(path.join(uploadDir, filename), file.buffer);
    }

    const slug = slugify(name, { lower: true, strict: true, trim: true });

    const product = new Product({
      name,
      category,
      subCategory,
      image: imagePath,
      description,
      features: JSON.parse(features || '[]'), // frontend se features string me aaye toh parse karo
      slug
    });

    await product.save();

    res.status(201).json({ success: true, message: 'Product added successfully', product });
  } catch (err) {
    next(ApiError(err.message || 'Internal Server Error', 500));
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, products });
  } catch (err) {
    next(ApiError(err.message, 500));
  }
};

const getProductBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const product = await Product.findOne({ slug });
    if (!product) return next(ApiError('Product not found', 404));
    res.status(200).json({ success: true, product });
  } catch (err) {
    next(ApiError(err.message, 500));
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    if (req.file) {
      const uploadDir = path.join(process.cwd(), 'upload/product');
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      const filename = `${Date.now()}_${req.file.originalname}`;
      const imagePath = path.join('upload/product', filename);
      fs.writeFileSync(path.join(uploadDir, filename), req.file.buffer);
      updatedData.image = imagePath;
    }

    if (updatedData.name) {
      updatedData.slug = slugify(updatedData.name, { lower: true, strict: true, trim: true });
    }

    if (updatedData.features && typeof updatedData.features === 'string') {
      updatedData.features = JSON.parse(updatedData.features);
    }

    const product = await Product.findByIdAndUpdate(id, updatedData, { new: true });

    if (!product) return next(ApiError('Product not found', 404));

    res.status(200).json({ success: true, message: 'Product updated', product });
  } catch (err) {
    next(ApiError(err.message, 500));
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) return next(ApiError('Product not found', 404));
    res.status(200).json({ success: true, message: 'Product deleted' });
  } catch (err) {
    next(ApiError(err.message, 500));
  }
};

export {
  saveProduct,
  getAllProducts,
  getProductBySlug,
  updateProduct,
  deleteProduct
};
