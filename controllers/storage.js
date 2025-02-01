/**
@_QUE_HACE_ESTE_ARCHIVO_______________________________________________
        controlador :   almacena imagenes y lo anexa al registro
@_REQUIRE_______entrada_de_archivos___________________________________
_ _ _ storageModel  :   modelo
_ _ _ .env
@_EXPORTS_______salida_de_modulos_____________________________________
        getItems    :   obtener items
        getItem     :   obtener un item
        createItems :   crear un item
        updateItems :   actualizar un item
        deleteItems :   eliminar un item
@_N_O_T_A_____________________________________________________________
_ _ _ NOTA
*/


const fs = require('fs')
const { matchedData } = require('express-validator')
const { storageModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')
const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage`

/**
 * obtener lista
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    // const data = ['hola', 'mundo']
    // res.send({ data })
    try {
        const data = await storageModel.find({})
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error Get Items')
    }
}

/**
 * obtener uno
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
    try {
        const { id } = matchedData(req)
        const data = await storageModel.findById(id)
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error Get Item')
    }
}

/**
 * insertar
 * @param {*} req 
 * @param {*} res 
 */
const createItems = async (req, res) => {
    try {
        // const body=req.body //es igual que la linea siguiente
        const { body, file } = req
        console.log(file)
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        }
        const data = await storageModel.create(fileData)
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'error create items')
    }
}

/**
 * actualizar
 * @param {*} req 
 * @param {*} res 
 */
const updateItems = async (req, res) => { }

/**
 * eliminar
 * @param {*} req 
 * @param {*} res 
 */
const deleteItems = async (req, res) => {
    try {
        const { id } = matchedData(req)
        const dataFile = await storageModel.findById(id)

        // await storageModel.deleteOne(id)
        await storageModel.delete({ _id: id })
        const { filename } = dataFile
        const filePath = `${MEDIA_PATH}/${filename}`
        // fs.unlinkSync(filePath)
        const data = {
            filePath,
            deleted: 1
        }

        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error Delete Item')
    }
}

module.exports = {
    getItems,
    getItem,
    createItems,
    updateItems,
    deleteItems
}