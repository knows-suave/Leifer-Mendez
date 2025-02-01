/**
 * confirma que los datos son correctos
@_entra__________________________
_ _ _ nada
@_sale___________________________
_ _ _ la aprovacion del check de express-validator
@_NOTA___________________________
_ _ _ complemento final de express-validator
*/

const { validationResult } = require("express-validator")

const validateResults = (req, res, next) => {
    try {
        validationResult(req).throw()
        return next()
    } catch (error) {
        res.status(403)
        res.send({ errors: error.array() })
    }
}

module.exports = validateResults