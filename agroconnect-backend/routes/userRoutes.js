const express = require('express');
const multer = require('multer');
const { registerUser, loginUser } = require('../controllers/userController');

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.post('/register', upload.fields([{ name: 'proofDocument' }, { name: 'profilePhoto' }]), registerUser);
router.post('/login', loginUser);
module.exports = router;
