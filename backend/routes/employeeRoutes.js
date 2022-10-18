const express = require('express');
const router = express.Router();
const {createEmployee} = require('../controllers/employeeController');

const {protect} = require('../middleware/authMiddleware')

router.post('/', protect ,createEmployee);


module.exports = router;