// routes/index.js
const express = require('express');
const { processInput } = require('../controllers/networkController');
const nluController = require('../controllers/nluController');

const router = express.Router();

router.post('/process-input', processInput);
router.post('/query', nluController.handleQuery);


module.exports = router;