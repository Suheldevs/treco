import express from 'express';
import multer from 'multer';
import { addCareer, getAllCareers, deleteCareer } from '../controller/career.controller.js';

const router = express.Router();

// Multer setup for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Routes
router.post('/save', upload.single('resume'), addCareer);
router.get('/getall', getAllCareers);
router.delete('/delete/:id', deleteCareer);

export default router;
