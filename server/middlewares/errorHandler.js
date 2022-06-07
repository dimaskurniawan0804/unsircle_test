const errorHandler = async (error, req, res, next) => {
    switch (error.name) {
        case "SequelizeValidationError":
        case "SequelizeUniqueConstraintError":
            err = error.errors.map(el => el.message)
            res.status(400).json({
                statusCode: 400,
                message: err
            })
            break;
        case "Invalid email/password":
            res.status(401).json({ message: error.name })
            break;
        case "Company already exist":
            res.status(400).json({ message: error.name })
            break;
        case "Company not found":
            res.status(400).json({ message: error.name })
            break;
        case "Item already exist":
            res.status(400).json({ message: error.name })
            break;
        case "Item not found":
            res.status(400).json({ message: error.name })
            break;
        case "Item quantity less than the order quantity":
            res.status(400).json({ message: error.name })
            break;
        case "Insufficient number of items available":
            res.status(400).json({ message: error.name })
            break;
        case "Insufficient number of items available (transaction)":
            res.status(400).json({ message: error.name })
            break;
        case "cannot delete this item, because item already in Transaction":
            res.status(400).json({ message: error.name })
            break;
        case "SequelizeForeignKeyConstraintError":
            res.status(401).json({ message: "Fail to create / update item" })
            break;
        case "SequelizeDatabaseError":
            res.status(401).json({ message: "Item not found" })
            break;
        case "JsonWebTokenError":
            res.status(401).json({ message: "Invalid token" })
            break;
        case "Invalid token":
            res.status(401).json({ message: error.name })
            break;
        case "Data not found":
            res.status(404).json({ message: error.name })
            break;
        case "You are not authorized":
            res.status(403).json({ message: error.name })
            break;
        default:
            break;
    }
}

module.exports = errorHandler