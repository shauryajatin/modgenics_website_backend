const express = require('express');
const { createContact, getAllContacts } = require('../controllers/contactController');
const { validateContact } = require('../validators/contactValidator');
const auth = require('../middleware/auth');

const router = express.Router();

// POST route
router.post('/', validateContact, createContact);

// GET route (authenticated)
// router.get('/', auth, getAllContacts);

module.exports = router;
