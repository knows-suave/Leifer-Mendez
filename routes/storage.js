/**
@_QUE_HACE_ESTE_ARCHIVO_______________________________________________
        es una ruta
@_REQUIRE_______entrada_de_archivos___________________________________
        handleStorage   :   uploadMiddleware    : sube archivos de la variable
        storage :   controlador :   crea, consulta, elimina item
        storage :   validador   :   asegura los datos
@_EXPORTS_______salida_de_modulos_____________________________________
        exportaciones_del_archivo
@_N_O_T_A_____________________________________________________________
        NOTA
*/


const express = require('express')
const router = express.Router()
const uploadMiddleware = require('../utils/handleStorage')
const { createItems, getItems, getItem, deleteItems } = require('../controllers/storage')
const { validatorGetItem } = require('../validators/storage')

router.post('/', uploadMiddleware.single('myfile'), createItems)

// lista items
router.get('/', getItems)
// detalle de item
router.get('/:id', validatorGetItem, getItem)
// eliminar item
router.delete('/:id', validatorGetItem, deleteItems)

module.exports = router