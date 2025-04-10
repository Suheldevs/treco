import express from 'express';
import multer from 'multer';
import {
  saveProduct,
  getAllProducts,
  getProductBySlug,
  updateProduct,
  deleteProduct
} from '../controller/product.controller.js';

const router = express.Router();
const upload = multer(); 

router.post('/add', upload.single('image'), saveProduct);
router.get('/', getAllProducts);
router.get('/:slug', getProductBySlug);
router.put('/update/:id', upload.single('image'), updateProduct);
router.delete('/delete/:id', deleteProduct);

export default router;
