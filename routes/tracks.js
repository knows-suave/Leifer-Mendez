/**
@_QUE_HACE_ESTE_ARCHIVO_______________________________________________
        es la ruta de los archivos
    
@_REQUIRE_______entrada_de_archivos___________________________________
        tracks  :   validador de datos
        tracks  :   controlador         :       crea, actualiza, elimina, obtiene registro
        session :   authMiddleware      :       verificar token
        rol     :   checkRol            :       
@_EXPORTS_______salida_de_modulos_____________________________________
        
@_N_O_T_A_____________________________________________________________
        
*/

const express = require('express')
const { getItem, getItems, createItems, updateItems, deleteItems } = require('../controllers/tracks')
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks')
const { authMiddleware } = require('../middleware/session')
const { checkRol } = require('../middleware/rol')

const router = express.Router()

router.get('/', authMiddleware, getItems)

// router.get('/:id', getItem)
router.get('/:id', authMiddleware, validatorGetItem, getItem)

// router.post('/', validatorCreateItem, customHeader, createItems)
router.post('/', authMiddleware, checkRol(["admin"]), validatorCreateItem, createItems)

router.put('/:id', authMiddleware, validatorCreateItem, updateItems)

router.delete('/:id', authMiddleware, validatorGetItem, deleteItems)

module.exports = router