/**
@_QUE_HACE_ESTE_ARCHIVO_______________________________________________
_ _ _ es un modelo
_ _ _ 
_ _ _ 
@_REQUIRE______entrada_de_archivos___________________________________
_ _ _ 
@_EXPORTS______salida_de_modulos_____________________________________
_ _ _ el modelo users
_ _ _ 
_ _ _ 
@_N_O_T_A_____________________________________________________________
_ _ _ mongoose-delete   ;   no elimina el registro deseado, solo lo cataloga como eliminado y lo mantiene oculto
_ _ _ 
*/


const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const UserScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        age: {
            type: Number
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String,
            select: false //osea no se podra ver en un find, es un filtro
        },
        role: {
            type: ['user', 'admin'],
            default: 'user'
        },
    },
    {
        timestamps: true, //fecha de creacion
        versionKey: false
    }
)

UserScheme.plugin(mongooseDelete, { overrideMethods: 'all' })

module.exports = mongoose.model('users', UserScheme)