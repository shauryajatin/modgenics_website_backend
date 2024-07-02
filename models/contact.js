const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String, required: true },
    phone: { type: String, required: true },
    helpText: { type: String, required: true },
});

module.exports = mongoose.model('Contact', contactSchema);
