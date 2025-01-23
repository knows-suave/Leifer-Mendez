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