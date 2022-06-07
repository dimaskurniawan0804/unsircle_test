const express = require('express')
const router = express.Router()
const companyController = require('../controllers/companiesController');

router.post('/', companyController.addCompany)
router.get('/', companyController.fetchAllCompany)
router.get('/:companyId', companyController.fetchCompanyById)
router.delete('/:companyId', companyController.deleteCompanyById)
router.put('/:companyId', companyController.updateCompanyById)

module.exports = router