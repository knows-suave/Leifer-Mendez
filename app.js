/**
@entra
    todas las rutas
    dbConect conecta a la base de datos
    loggerStream conecta al registro web de errores
@sale
    para el usuario en navegador
*/

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morganBody = require('morgan-body')
const dbConnect = require('./config/mongo.js')
// const { body } = require('express-validator')
const { loggerStream } = require('./utils/handleLogger.js')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('storage'))



morganBody(app, {
    stream: loggerStream,
    skip: function (req, res) {
        return res.statusCode < 400
    }
})

const port = process.env.PORT || 3000

// rutas
// app.use('/api', require('./routes/tracks.js'))
app.use('/api', require('./routes'))

app.listen(port, () => {
    console.log('http://localhost:' + port)
})

dbConnect()