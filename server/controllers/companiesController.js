const { Company, Item, User, Transaction } = require('../models/index');

class companyController {
    static async addCompany(req, res, next) {
        const { name } = req.body
        try {
            const findCompany = await Company.findOne({
                where: {
                    name: name
                }
            })
            if (findCompany) {
                throw { name: `Company already exist` }
            }

            const response = await Company.create({
                name
            })
            res.status(201).json(response)
        } catch (error) {
            next(error)
        }
    }

    static async fetchAllCompany(req, res, next) {
        try {
            const response = await Company.findAll()
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }

    static async deleteCompanyById(req, res, next) {
        const { companyId } = req.params
        try {
            const findCompany = await Company.findByPk(companyId)
            if (!findCompany) {
                throw { name: `Company not found` }
            }
            const response = await Company.destroy({
                where: {
                    id: companyId
                }
            })
            res.status(200).json({
                message: `success delete company with id ${companyId}`
            })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async updateCompanyById(req, res, next) {
        const { name } = req.body
        const { companyId } = req.params
        try {
            const findCompany = await Company.findOne(
                {
                    where: {
                        id: companyId
                    }
                })
            if (!findCompany) {
                throw { name: `Company not found` }
            }

            const response = await Company.update({ name }, { where: { id: companyId } })
            res.status(200).json({
                message: `success update company with id ${companyId}`
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = companyController