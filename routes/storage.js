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