import express from "express";
import ProductValidation from "../middleware/ProductValidation.js";
import { saveProduct } from "../controller/product.controller.js";
import { upload } from "../config/multer.config.js";
const router = express.Router()

router.post('/save',upload.single('image'),saveProduct)

export default router