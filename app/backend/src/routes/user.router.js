const express = require('express');
const userController = require('../controllers/userController');
const { validates } = require('../middleware/validateLogin');
const router = express.Router();

router.post('/' , validates,userController.createNewUser);
router.get('/', userController.getAllController);
router.get('/:id', userController.getByIds);
router.put('/:id', userController.upDate);

module.exports = router;