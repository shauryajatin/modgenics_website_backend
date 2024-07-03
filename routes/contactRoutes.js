const express = require('express');
const { createContact, getAllContacts } = require('../controllers/contactController');
const { validateContact } = require('../validators/contactValidator');
// const auth = require('../middleware/auth');
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

// POST route
router.post('/contact', validateContact, createContact);

// GET route (authenticated)
router.get('/contact', validateToken , getAllContacts);

module.exports = router;
