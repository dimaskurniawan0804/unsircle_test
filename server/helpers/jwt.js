const jwt = require('jsonwebtoken')
const key = process.env.JWT_SECRET_KEY

const createToken = (payload) => {
    return jwt.sign(payload, key)
}

const readToken = (token) => {
    return jwt.verify(token, key)
}

module.exports = {
    createToken,
    readToken
}