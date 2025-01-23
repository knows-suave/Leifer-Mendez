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