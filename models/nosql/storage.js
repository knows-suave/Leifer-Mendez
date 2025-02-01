/**
@_QUE_HACE_ESTE_ARCHIVO_______________________________________________
_ _ _ es un modelo
_ _ _ 
_ _ _ 
@_REQUIRE_______entrada_de_archivos___________________________________
_ _ _ 
@_EXPORTS_______salida_de_modulos_____________________________________
_ _ _ modelo storages
_ _ _ 
_ _ _ 
@_N_O_T_A_____________________________________________________________
_ _ _ mongoose-delete   ;   no elimina el registro deseado, solo lo cataloga como eliminado y lo mantiene oculto
*/


const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const StorageScheme = new mongoose.Schema(
    {
        url: {
            type: String
        },
        filename: {
            type: String
        }
    },
    {
        timestamps: true, //fecha de creacion
        versionKey: false
    }
)

StorageScheme.plugin(mongooseDelete, { overrideMethods: 'all' })

module.exports = mongoose.model('storages', StorageScheme)