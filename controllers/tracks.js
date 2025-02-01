/**
@_QUE_HACE_ESTE_ARCHIVO_______________________________________________
        contiene modulos fundamentales para controlar items
@_REQUIRE_______entrada_de_archivos___________________________________
        tracksModel :   model
        handleError :   
@_EXPORTS_______salida_de_modulos_____________________________________
        getItems    :   obtener items
        getItem     :   obtener 1 item
        createItems :   crear item
        updateItems :   actualizar item
        deleteItems :   eliminar item
@_N_O_T_A_____________________________________________________________
        
*/

const { matchedData } = require('express-validator')
const { tracksModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')

/**
 * obtener lista
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    try {
        //
        const user = req.user
        //
        const data = await tracksModel.find({})
        res.send({ data, user })
    } catch (error) {
        handleHttpError(res, 'Error en getItems')
    }

    // const data = ['hola', 'mundo']
    // res.send({ data })

}

/**
 * obtener uno
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
    try {
        req = matchedData(req)
        const { id } = req
        const data = await tracksModel.findById(id)
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
        const body = matchedData(req)
        const data = await tracksModel.create(body)
        res.send({ data })

        // const body = req.body
        // const bodyClean = matchedData(req)

        // // // const body=req.body //es igual que la linea siguiente
        // // const { body, headers } = req
        // // // console.log('createItems b')
        // // // console.log(body)
        // // // console.log('createItems h')
        // // // console.log(headers)
        // // const data = await tracksModel.create(body)
        // res.send({ body, bodyClean })
    } catch (error) {
        handleHttpError(res, 'Error en createItems')
    }
}

/**
 * actualizar
 * @param {*} req 
 * @param {*} res 
 */
const updateItems = async (req, res) => {
    try {
        const { id, ...body } = await matchedData(req)
        const data = await tracksModel.findOneAndUpdate(id, body)
        res.send({ data })

    } catch (error) {
        handleHttpError(res, 'Error en update Items')
    }
}

/**
 * eliminar
 * @param {*} req 
 * @param {*} res 
 */
const deleteItems = async (req, res) => {
    try {
        req = matchedData(req)
        const { id } = req
        // const data = await tracksModel.deleteOne({ _id: id }) //deleteOne borra fisicamente
        const data = await tracksModel.delete({ _id: id }) //delete borrado logico
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error delete Item')
    }
}

module.exports = {
    getItems,
    getItem,
    createItems,
    updateItems,
    deleteItems
}