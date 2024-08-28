const express = require('express');
const { createRepository, commitChanges, revertRepository, uploadFile, createDirectory } = require('../controllers/repoController');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const router = express.Router();

// Routes with authentication
router.post('/create', auth, createRepository);
router.post('/commit', auth, commitChanges);
router.post('/revert', auth, revertRepository);
router.post('/upload', [auth, upload.single('file')], uploadFile);
router.post('/create-directory', auth, createDirectory);

module.exports = router;


