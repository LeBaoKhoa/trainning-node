const express = require('express');
const router = express.Router();
const experienceController = require('../controllers/experienceController');

router.get('/', experienceController.getAll);

module.exports = router;
