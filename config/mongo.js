/**
 * @entra {url de mongo}
 * @sale {conecion a mongo}
 */

const mongoose = require('mongoose')

const dbConnect = async () => {
    const DB_URI = process.env.DB_URI
    try {
        // Intentamos conectar a la base de datos. El await hace que la función se pause hasta que se resuelva la promesa.
        const conn = await mongoose.connect(DB_URI);
        console.log(`MongoDB conectado: ${conn.connection.host}`)
    } catch (error) {
        console.log(`ERROR DE MONGO`)
        // Si ocurre un error durante la conexión, lo capturamos y lo mostramos por consola.
        console.error(error)
        process.exit(1); // Salimos de la aplicación con un código de error.
    }
}

module.exports = dbConnect