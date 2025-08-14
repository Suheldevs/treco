import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    
    service: {
      type: String,
      required: true,
    },
    projectName: {
      type: String,
    },
    projectType: {
      type: String,
    },
    area: {
      type: Number,
    },
    floor: {
      type: Number,
    },
    
    featuresOfInterest: {
      type: [String],
      default: []
    },
    mediaEntertainment: {
      type: [String],
      default: []
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

const Inquiry = mongoose.model('Inquiry', inquirySchema);
export default Inquiry;