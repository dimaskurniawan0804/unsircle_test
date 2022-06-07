const express = require('express')
const router = express.Router()
const transactionController = require('../controllers/transactionsController');
const authentication = require('../middlewares/authentication');

router.use(authentication)
router.post('/', transactionController.addTransaction)
router.get('/:companyId', transactionController.findTransactionInAWeek)
router.delete('/:transactionId', transactionController.deleteTransactionById)
router.put('/:transactionId', transactionController.updateTransactionById)

module.exports = router