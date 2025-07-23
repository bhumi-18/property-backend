const express = require('express');
const {
  getProperties,
  getProperty,
  addProperty
} = require('../controllers/propertycontroller');
const auth = require('../middleware/authmiddleware');

const router = express.Router();

router.get('/', getProperties);
router.get('/:id', getProperty);
router.post('/', auth, addProperty);

module.exports = router;
