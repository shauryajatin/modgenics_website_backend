const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes');
const connectDb = require("./config/dbConnection");
const app = express();
const port = 3000;
const dotenv = require("dotenv").config()
app.use(express.json());
// MongoDB connection

connectDb()
// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/contact', contactRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
