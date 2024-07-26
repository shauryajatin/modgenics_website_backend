const Contact = require('../models/contact');
const nodemailer = require('nodemailer');

const adminEmail = 'sales@modgenics.co'; // replace with your admin email

const transporter = nodemailer.createTransport({
    service: 'hotmail', // replace with your email provider
    auth: {
        user: 'sales@modgenics.co', // replace with your email
        pass: "Modgenics@8340", // replace with your email password
    },
});

exports.createContact = async (req, res) => {
    const { fullName, email, company, phoneNumber, description } = req.body;

    const contact = new Contact({
        fullName,
        email,
        company,
        phoneNumber,
        description,
    });

    try {
        await contact.save();

        const mailOptions = {
            from: 'sales@modgenics.co', // replace with your email
            to: adminEmail,
            subject: 'New Contact Form Submission',
            text: `You have a new contact form submission:
                   Full Name: ${fullName}
                   Email: ${email}
                   Company: ${company}
                   Phone: ${phoneNumber}
                   Help Text: ${description}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({ message: 'Failed to send email to admin' });
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        console.log("Contact form submitted successfully")
      return  res.status(201).json({ message: 'Contact form submitted successfully' });
    
    } catch (error) {
        console.log(error)
     return    res.status(500).json({ message: 'Server error, please try again later' });
    }
};

exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Server error, please try again later' });
    }
}; 