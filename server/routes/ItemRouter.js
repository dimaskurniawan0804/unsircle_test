const express = require('express')
const router = express.Router()
const itemController = require('../controllers/itemsController');

router.post('/', itemController.addItem)
router.get('/', itemController.fetchAllItem)
router.delete('/:itemId', itemController.deleteItemById)
router.put('/:itemId', itemController.updateItemById)

module.exports = router