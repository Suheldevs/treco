import fs from 'fs'
import path from 'path'
import Career from '../model/career.model.js'


export const addCareer = async (req, res) => {
    try {
        const { fullName, email, phone, jobProfile } = req.body;
        let resumePath = null;
        if (req.file) {
            const uploadDir = path.join(process.cwd(), 'upload/resume');
            if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

            const filename = `${Date.now()}_${req.file.originalname}`;
            const filePath = path.join('upload/resume', filename);
            fs.writeFileSync(path.join(uploadDir, filename), req.file.buffer);

            resumePath = filePath;
        }

        const newCareer = new Career({
            fullName,
            email,
            phone,
            jobProfile,
            resume: resumePath
        });

        await newCareer.save();

        res.status(201).json({ message: 'Application submitted successfully!', data: newCareer });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong!', error: error.message });
    }
};

// GET ALL Careers
export const getAllCareers = async (req, res) => {
    try {
        const careers = await Career.find().sort({ createdAt: -1 });
        res.status(200).json({ data: careers });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch records!', error: error.message });
    }
};

// DELETE Career by ID
export const deleteCareer = async (req, res) => {
    try {
        const { id } = req.params;
        const career = await Career.findById(id);

        if (!career) {
            return res.status(404).json({ message: 'Career entry not found!' });
        }

        // If resume exists, delete file from disk
        if (career.resume) {
            const fullResumePath = path.join(process.cwd(), career.resume);
            if (fs.existsSync(fullResumePath)) {
                fs.unlinkSync(fullResumePath);
            }
        }

        await Career.findByIdAndDelete(id);

        res.status(200).json({ message: 'Application deleted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete record!', error: error.message });
    }
};
