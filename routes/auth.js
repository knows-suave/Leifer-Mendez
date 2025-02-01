/**
@_entra__________________________
_ _ _ archivo de registro y login
_ _ _ archivo de validador de registro y login
@_sale___________________________
_ _ _ ruta de login y de registro
@_NOTA___________________________
_ _ _ rutas con middleware
*/

const express = require('express')
const { validatorRegister, validatorLogin } = require('../validators/auth')
const { loginCtrl, registerCtrl } = require('../controllers/auth')
const router = express.Router()


router.post('/register', validatorRegister, registerCtrl)

router.post('/login', validatorLogin, loginCtrl)

module.exports = router