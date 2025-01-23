const { handleHttpError } = require("../utils/handleError")

/**
 * Array con los roles permitidos
 * @param {*} roles 
 * @returns 
 */
const checkRol = (roles) => (req, res, next) => {
    try {
        const { user } = req
        console.log({ user })
        const rolesByUser = user.role
        const checkValueRol = roles.some((rolSingle) => rolesByUser.includes(rolSingle)) //true o false
        if (!checkValueRol) {
            handleHttpError(res, "usuario no tiene permiso", 403)
            return
        }
        next()
    } catch (error) {
        handleHttpError(res, "error checkRol", 403)
    }
}

//aqui empieza la exportacion de modulos
module.exports = {
    checkRol,
}