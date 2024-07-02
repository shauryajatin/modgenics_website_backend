const Contact = require('../models/contact');
const nodemailer = require('nodemailer');

const adminEmail = 'shankarjatin1005@gmail.com'; // replace with your admin email

const transporter = nodemailer.createTransport({
    service: 'hotmail', // replace with your email provider
    auth: {
        user: 'shankarjatin1005@outlook.com', // replace with your email
        pass: 'Hanumanji@10',  // replace with your email password
    },
});

exports.createContact = async (req, res) => {
    const { fullname, email, company, phone, helpText } = req.body;

    const contact = new Contact({
        fullname,
        email,
        company,
        phone,
        helpText,
    });

    try {
        await contact.save();

        // Send email to admin
        const mailOptions = {
            from: 'shankarjatin1005@gmail.com', // replace with your email
            to: adminEmail,
            subject: 'New Contact Form Submission',
            text: `You have a new contact form submission:
                   Full Name: ${fullname}
                   Email: ${email}
                   Company: ${company}
                   Phone: ${phone}
                   Help Text: ${helpText}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({ message: 'Failed to send email to admin' });
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error, please try again later' });
    }
};