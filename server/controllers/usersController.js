const { Company, Item, User, Transaction } = require('../models/index');
const { comparePassword } = require('../helpers/bcrypt');
const { createToken } = require('../helpers/jwt');

class userController {
    static async userRegister(req, res, next) {
        const { name, email, password } = req.body
        try {
            const response = await User.create({
                name, email, password, role: "admin"
            })
            res.status(201).json({
                id: response.id,
                name: response.name,
                email: response.email,
                role: response.role
            })
        } catch (error) {
            next(error)
        }
    }

    static async loginUser(req, res, next) {
        const { email, password } = req.body
        try {
            if (!email) {
                throw { name: "Email is required" }
            }
            if (!password) {
                throw { name: "Password is required" }
            }
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if (!user) {
                throw { name: "Invalid email/password" }
            }

            const chekPassword = comparePassword(password, user.password)
            if (!chekPassword) {
                throw { name: "Invalid email/password" }
            }

            const payload = {
                id: user.id
            }

            const access_token = createToken(payload)

            res.status(200).json({
                id: user.id,
                role: user.role,
                access_token,
            })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}

module.exports = userController