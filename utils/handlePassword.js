/**
@_entrada_de_archivos_____________________
_ _ _ ninguno
@_salida_de_modulos_o_funciones_______________________
_ _ _ encriptar contraseña  :   encrypt(contraseña)
_ _ _ comparar contraseñas  :   compare(contraseña,contraseñaEncryptada)
_ _ _ 
@_NOTA___________________________
_ _ _ todo lo de contraseñas
*/

const bcryptjs = require('bcryptjs')

//encryptar
const encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 10)
    return hash
}


const compare = async (passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword)
}

module.exports = {
    encrypt,
    compare
}