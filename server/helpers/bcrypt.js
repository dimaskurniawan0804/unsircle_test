const bcryptjs = require('bcryptjs');

const hashPassword = (password) => {
    return bcryptjs.hashSync(password, 10)
}

const comparePassword = (userPassword, hashPass) => {
    return bcryptjs.compareSync(userPassword, hashPass)
}

module.exports = {
    hashPassword, comparePassword
}