const { Company, Item, User, Transaction, sequelize } = require('../models/index');

class transactionController {
    static async addTransaction(req, res, next) {
        const { ItemId, CompanyId, quantity } = req.body
        const { id } = req.user
        const t = await sequelize.transaction();
        try {
            const checkCompany = await Company.findByPk(CompanyId)
            if (!checkCompany) {
                throw { name: `Company not found` }
            }

            const checkItem = await Item.findByPk(ItemId)
            if (!checkItem) {
                throw { name: `Item not found` }
            }

            if (checkItem.quantity < quantity) {
                throw { name: "Item quantity less than the order quantity" }
            }

            const substractItemQuantity = await Item.update(
                { quantity: checkItem.quantity - quantity },
                { where: { id: checkItem.id } },
                { transaction: t })

            const response = await Transaction.create({
                UserId: id,
                ItemId,
                CompanyId,
                quantity
            }, { transaction: t })

            await t.commit()

            res.status(201).json(
                { message: "Success add new transaction" }
            )

        } catch (error) {
            await t.rollback()
            next(error)
        }
    }

    static async findTransactionInAWeek(req, res, next) {
        const { companyId } = req.params
        try {
            const response = await sequelize.query(`SELECT * FROM "Transactions" t  WHERE "updatedAt" > CURRENT_DATE - 6 AND "CompanyId" = ${companyId}  ;`, { raw: true, type: sequelize.QueryTypes.SELECT })
            res.status(200).json(response)
            console.log(response);
        } catch (error) {
            next(error)
        }
    }

    static async deleteTransactionById(req, res, next) {
        const { transactionId } = req.params
        const t = await sequelize.transaction();
        try {
            const findTransaction = await Transaction.findByPk(transactionId)
            const findItem = await Item.findByPk(findTransaction.ItemId)
            const addItemQuantity = await Item.update({
                quantity: findItem.quantity + findTransaction.quantity
            }, {
                where: {
                    id: findTransaction.ItemId
                }
            }, { transaction: t })

            const deleteTransaction = await Transaction.destroy({
                where: { id: transactionId }
            }, { transaction: t })

            t.commit()

            res.status(200).json({
                message: `success delete transaction with id ${transactionId}`
            })

        } catch (error) {
            await t.rollback()
            next(error)
        }
    }

    static async updateTransactionById(req, res, next) {
        const { transactionId } = req.params
        const { quantity, command } = req.body
        const t = await sequelize.transaction();

        try {
            const findTransaction = await Transaction.findByPk(transactionId)
            const findItem = await Item.findByPk(findTransaction.ItemId)

            if (command === "add") {
                if (findItem.quantity < quantity) {
                    throw { name: "Insufficient number of items available" }
                }

                const updateItemQuantity = await Item.update({
                    quantity: +findItem.quantity - +quantity
                }, { where: { id: findItem.id } }, { transaction: t })

                const updateTransactionQuantity = await Transaction.update({
                    quantity: +findTransaction.quantity + +quantity
                }, { where: { id: transactionId } }, { transaction: t })
            }

            if (command === 'substract') {
                {
                    if (findTransaction.quantity < quantity) {
                        throw { name: "Insufficient number of items available (transaction)" }
                    }

                    let newQuantity = findItem.quantity - quantity
                    const updateItemQuantity = await Item.update({
                        quantity: +findItem.quantity + +quantity
                    }, { where: { id: findItem.id } }, { transaction: t })

                    const updateTransactionQuantity = await Transaction.update({
                        quantity: +findTransaction.quantity - +quantity
                    }, { where: { id: transactionId } }, { transaction: t })
                }
            }

            t.commit()
            res.status(200).json({ message: `success update transaction with id ${transactionId}` })
        } catch (error) {
            await t.rollback()
            next(error)
        }
    }
}

module.exports = transactionController