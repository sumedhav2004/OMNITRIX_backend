const express = require('express');
const { register, login } = require('../controllers/authController'); // Make sure these are correctly imported
const router = express.Router();

// @route   POST api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', register);

// @route   POST api/auth/login
// @desc    Authenticate user and get token
// @access  Public
router.post('/login', login);

module.exports = router;

