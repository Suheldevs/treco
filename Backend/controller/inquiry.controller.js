import nodemailer from 'nodemailer';
import Inquiry from '../model/inquiry.model.js';

export const createInquiry = async (req, res) => {
  const {
    name,
    phone,
    email,
    service,
    projectName,
    projectType,
    area,
    floor,
    message,
  } = req.body;

  if (!name || !phone || !email || !service || !message) {
    return res.status(400).json({ message: 'Required fields are missing' });
  }

  try {
    const newInquiry = new Inquiry({
      name,
      phone,
      email,
      service,
      projectName,
      projectType,
      area,
      floor,
      message,
    });

    await newInquiry.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'suhel.codecrafter@gmail.com',
      subject: 'Treco India Website New Inquiry Received',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px;">
          <h2 style="color: #0073e6;">New Inquiry Received</h2>
          <p>Dear Director,</p>
          <p>You have received a new inquiry from the website <a href="https://treco.in/" target="_blank">https://treco.in</a>. Below are the details:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${phone}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Service:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${service}</td></tr>
            ${projectName ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Project Name:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${projectName}</td></tr>` : ''}
            ${projectType ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Project Type:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${projectType}</td></tr>` : ''}
            ${area ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Area (sq ft):</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${area}</td></tr>` : ''}
            ${floor ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Floor:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${floor}</td></tr>` : ''}
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Message:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${message}</td></tr>
          </table>

          <p>Please respond to this inquiry as soon as possible.</p>
          <p style="margin-top: 20px;">
            Kindest Regards,<br>
            <strong>Code Crafter Web Solutions</strong><br>
            <strong>P:</strong> +91 9336969289<br>
            <strong>O:</strong> +91 8840700176<br>
            <strong>W:</strong> <a href="https://codecrafter.co.in/" target="_blank">https://codecrafter.co.in/</a>
          </p>
        </div>
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Email failed', error });
      }
      console.log('Email sent:', info.response);
    });

    res.status(201).json({
      message: 'Inquiry Sent Successfully!',
      inquiryData: newInquiry,
    });
  } catch (error) {
    console.error('Error creating inquiry:', error);
    res.status(500).json({ message: 'Error creating inquiry', error });
  }
};


export const getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find();
    res.status(200).json(inquiries);
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    res.status(500).json({ message: 'Error fetching inquiries', error });
  }
};

export const deleteInquiry = async (req, res) => {
  const { id } = req.params;
  try {
    const inquiry = await Inquiry.findByIdAndDelete(id);

    if (!inquiry) {
      return res.status(404).json({ message: 'Inquiry not found' });
    }
    res.status(200).json({ message: 'Inquiry deleted successfully' });
  } catch (error) {
    console.error('Error deleting inquiry:', error);
    res.status(500).json({ message: 'Error deleting inquiry', error });
  }
};