/**
@_QUE_HACE_ESTE_ARCHIVO_______________________________________________
_ _ _ es un modelo
_ _ _ 
_ _ _ 
@_REQUIRE_______entrada_de_archivos___________________________________
_ _ _ _ _ _ 
@_EXPORTS_______salida_de_modulos_____________________________________
_ _ _ el modelo tracks
_ _ _ 
_ _ _ 
@_N_O_T_A_____________________________________________________________
_ _ _ mongoose-delete   ;   no elimina el registro deseado, solo lo cataloga como eliminado y lo mantiene oculto
*/


const mongoose = require('mongoose')
const { validate } = require('./storage')
const mongooseDelete = require('mongoose-delete')

const TracksScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        album: {
            type: String
        },
        cover: {
            type: String,
            validate: {
                validator: (req) => {
                    return true
                },
                message: 'ERROR_URL'
            }
        },
        artist: {
            name: {
                type: String
            },
            nickname: {
                type: String
            },
            nationality: {
                type: String
            }
        },
        duration: {
            start: {
                type: Number
            },
            end: {
                type: Number
            }
        },
        mediaId: {
            type: mongoose.Types.ObjectId,
        }
    },
    {
        timestamps: true, //fecha de creacion
        versionKey: false
    }
)

TracksScheme.plugin(mongooseDelete, { overrideMethods: 'all' })

module.exports = mongoose.model('tracks', TracksScheme)