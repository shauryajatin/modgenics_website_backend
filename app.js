const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const port = 3000;

// MongoDB connection
mongoose.connect('mongodb+srv://shankarjatin1005:nYdr2TsoY4NXfCnm@cluster0.subvhvu.mongodb.net/modgenics', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/contact', contactRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
