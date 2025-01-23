const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

// firmar
/**
 * debes pasar el objeto del usuario
 * @returns 
 */
const tokenSign = async (user) => {
    const sign = jwt.sign(
        {
            _id: user._id,
            role: user.role
        },
        JWT_SECRET,
        {
            expiresIn: "2h"
        }
    )
    return sign
}

// verificar debes pasar el token de sesion
const verifyToken = async (tokenJWT) => {
    try {
        return jwt.verify(tokenJWT, JWT_SECRET)
    } catch (error) {
        return null
    }
}

module.exports = {
    tokenSign,
    verifyToken
}