const { Company, Item, User, Transaction } = require('../models/index');

class itemController {
    static async addItem(req, res, next) {
        let { name, quantity } = req.body
        try {
            // const findItem = await Item.findOne({
            //     where: {
            //         name
            //     }
            // })

            // if (findItem) {
            //     throw { name: `Item already exist` }
            // }

            if (+quantity < 1) {
                quantity = 0
            }

            const response = await Item.create({
                name,
                quantity,
            })

            res.status(201).json(response)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async fetchAllItem(req, res, next) {
        try {
            const response = await Item.findAll()
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }

    static async deleteItemById(req, res, next) {
        const { itemId } = req.params
        try {
            const findItem = await Company.findByPk(itemId)
            if (!findItem) {
                throw { name: `Item not found` }
            }
            await Item.destroy({
                where: {
                    id: itemId
                }
            })
            res.status(200).json({
                message: `success delete item with id ${itemId}`
            })
        } catch (error) {
            next(error)
        }
    }

    static async updateItemById(req, res, next) {
        const { name, quantity } = req.body
        const { itemId } = req.params
        try {
            const findItem = await Item.findOne(
                {
                    where: {
                        id: itemId
                    }
                })

            if (!findItem) {
                throw { name: `Item not found` }
            }

            await Item.update({ name, quantity }, { where: { id: itemId } })
            res.status(200).json({
                message: `success update item with id ${itemId}`
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = itemController