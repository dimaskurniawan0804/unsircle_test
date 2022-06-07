const { readToken } = require('../helpers/jwt')
const { User } = require('../models/index')

const authentication = async (req, res, next) => {
    const { access_token } = req.headers
    try {
        const payload = readToken(access_token)
        const selectedUser = await User.findByPk(payload.id)

        if (!selectedUser) {
            throw { name: "Unauthorized", statusCode: 401 }
        } else {
            req.user = {
                id: selectedUser.id,
                name: selectedUser.name,
                role: selectedUser.role
            }
            next()
        }
    } catch (error) {
        next(error)
    }
}

module.exports = authentication