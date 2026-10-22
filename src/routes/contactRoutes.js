const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const { validateContact } = require('../middlewares/validate');

router.get('/', contactController.getAll);
router.post('/', validateContact, contactController.create);

module.exports = router;
