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