const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes');
const adminRoutes = require('./routes/adminRoutes');
const connectDb = require("./config/dbConnection");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;
const dotenv = require("dotenv")
dotenv.config();
app.use(express.json());

// MongoDB connection
app.use(cors());

connectDb()
// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/', contactRoutes);
app.use('/', adminRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
