const express = require('express')
const router = express.Router()
const userRouter = require('./UserRouter');
const itemsRouter = require('./ItemRouter');
const companyRouter = require('./CompanyRouter');
const transactionRouter = require('./TransactionRouter');

router.use('/users', userRouter)
router.use('/items', itemsRouter)
router.use('/company', companyRouter)
router.use('/transaction', transactionRouter)

module.exports = router