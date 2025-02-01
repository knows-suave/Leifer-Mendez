/**
@_QUE_HACE_ESTE_ARCHIVO_______________________________________________
        verifica el token
@_REQUIRE_______entrada_de_archivos___________________________________
        usersModel  :   es el modelo
        handleError :   handleHttpError :   manejador de errores html
        handleJWT   :   varifyToken
@_EXPORTS_______salida_de_modulos_____________________________________
        authMiddleware  :   verifica token
@_N_O_T_A_____________________________________________________________
        
*/

const { usersModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')
const { verifyToken } = require('../utils/handleJWT')

const authMiddleware = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            handleHttpError(res, 'no existe token', 401)
            return
        }

        const token = req.headers.authorization.split(' ').pop()
        const dataToken = await verifyToken(token)

        if (!dataToken._id) {
            handleHttpError(res, 'error id token', 401)
            return
        }

        //saber quien loguea
        const user = await usersModel.findById(dataToken._id)
        req.user = user
        next()
    } catch (error) {
        handleHttpError(res, 'No Sesion', 401)
    }
}

module.exports = { authMiddleware }