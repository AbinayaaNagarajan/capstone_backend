const express = require('express');
const router = express.Router();
const signupController = require('../controllers/signupController');

// Routes for Signup
router.post('/register', signupController.signup);

module.exports = router;