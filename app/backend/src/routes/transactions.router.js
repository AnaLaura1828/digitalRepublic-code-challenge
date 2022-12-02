const express = require('express');
const transaction = require('../controllers/transactionsController');

const router = express.Router();

router.get('/', transaction.getAllController);
router.post('/', transaction.createTransaction);

module.exports = router;