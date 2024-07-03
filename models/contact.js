const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    description: { type: String, required: true },
});

module.exports = mongoose.model('Contact', contactSchema);
