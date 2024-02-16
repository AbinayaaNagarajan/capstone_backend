const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Routes for Contact
router.post('/saveContact', contactController.saveContact);

module.exports = router;