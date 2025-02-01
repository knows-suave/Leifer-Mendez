/**
@_QUE_HACE_ESTE_ARCHIVO_______________________________________________
        se encarga de subir un archivo en la carpeta de storage
@_REQUIRE_______entrada_de_archivos___________________________________
        
@_EXPORTS_______salida_de_modulos_____________________________________
        uploadMiddleware
@_N_O_T_A_____________________________________________________________
        copia el archivo del ordenador
*/


const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const pathStorage = `${__dirname}/../storage`
        cb(null, pathStorage)
    },
    filename: function (req, file, cb) {
        const ext = file.originalname.split('.').pop()// .split() divide el archivo donde le indicamos //.pop() obtiene el ultimo elemento de la division
        const filename = `file-${Date.now()}.${ext}`
        cb(null, filename)
    }
})

const uploadMiddleware = multer({ storage })

module.exports = uploadMiddleware