/**
@_entra__________________________
_ _ _ archivos de rutas
@_sale___________________________
_ _ _ url de las rutas
@_NOTA___________________________
_ _ _ genera url de loos archivos
*/

const express = require('express')
const router = express.Router()
const fs = require('fs')

// leeremos el nombre de los archivos
const PATH_ROUTES = __dirname //__dirname lee el contenido de la carpeta donde esta este archivo
const a = fs.readdirSync(PATH_ROUTES) //.readdirSync() en una lista almacena los nombres
console.log({ a })

const removeExtension = (fileName) => { // ()=> es una funcion con una variable de entrada
    return fileName.split('.').shift() // .split() divide el archivo donde le indicamos //.shift() obtiene el primer elemento de la division
}

fs.readdirSync(PATH_ROUTES).filter((file) => { //.readdirSync() en una lista almacena los nombres //.filter()
    const name = removeExtension(file) //llama a la funcion para remover la extension
    if (name !== 'index') {
        console.log(`cargando ruta ${name}`)
        router.use(`/${name}`, require(`./${file}`))
    }
})

module.exports = router