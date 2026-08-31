// ========================================= ROUTES (Traffic Police) ======================================= //
// Router ka kaam sirf ye check karna hai ki URL kya hai aur fir usko sahi Controller function pe bhej dena.

const express = require('express');
const router = express.Router();

// Controller ko import kiya
const userController = require('../controllers/userController');

// Agar GET request aayi '/api/users' pe, toh Controller ka 'getUsers' chala do
router.get('/', userController.getUsers);

// Agar POST request aayi, toh 'createUser' chala do
router.post('/', userController.createUser);

module.exports = router;
