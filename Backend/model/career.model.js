
import mongoose from 'mongoose';
const careerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    jobProfile: {
        type: String,
        required: true,
        trim: true
    },
    resume: {
        type: String,  
        default: null
    }
}, { timestamps: true });

const Career = mongoose.model('Career', careerSchema);

export default Career