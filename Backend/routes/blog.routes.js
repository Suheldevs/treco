import express from "express";
import multer from "multer";
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "../controller/blog.controller.js";

const router = express.Router();

// Multer setup to handle in-memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Routes
router.post("/save", upload.single("image"), createBlog);
router.get("/getall", getAllBlogs);
router.get("/get/:id", getBlogById);
router.put("/update/:id", upload.single("image"), updateBlog);
router.delete("/delete/:id", deleteBlog);

export default router;
