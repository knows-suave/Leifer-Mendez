/**
@_entra__________________________
_ _ _ archivo de los token
_ _ _ archivos que comparan contraseña
_ _ _ archivo de los modelos
@_sale___________________________
_ _ _ funcion de registro de usuario 
_ _ _ funcion de login de usuario
@_NOTA___________________________
_ _ _ login y registro de usuario
*/

const { matchedData } = require("express-validator")
const { tokenSign } = require("../utils/handleJWT")
const { encrypt, compare } = require("../utils/handlePassword")
const { usersModel } = require("../models")
const { handleHttpError } = require("../utils/handleError")

/**
 * Este controlador se encarga de registrar un usuario
 * @param {*} req 
 * @param {*} res 
 */
const registerCtrl = async (req, res) => {
    try {
        req = matchedData(req)
        const passwordHash = await encrypt(req.password)
        const body = { ...req, password: passwordHash }
        const dataUser = await usersModel.create(body)
        dataUser.set('password', undefined, { strict: false })

        const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        }

        res.send({ data })
    } catch (error) {
        handleHttpError(res, "Error register Ctrl")
    }
}

/**XD */
const loginCtrl = async (req, res) => {
    try {
        req = matchedData(req)
        const user = await usersModel.findOne({ email: req.email }).select('password name role email') //es por el model
        // console.log(user.email) //a investigar bien

        if (!user) {
            handleHttpError(res, "Usuario no existe en db", 404)
            return
        }
        const hashPassword = user.password //si vale tambien
        // const hashPassword = user.get('password')  //si vale tambien
        const check = await compare(req.password, hashPassword)

        if (!check) {
            handleHttpError(res, "Contraseña invalida", 401)
            return
        }

        user.set('password', undefined, { strict: false }) //no devuelve el password
        const data = {
            token: await tokenSign(user),
            user
        }

        res.send({ data })

    } catch (error) {
        handleHttpError(res, "Error login Ctrl")
    }
}

module.exports = {
    registerCtrl,
    loginCtrl
}