const express = require('express')
const { validatorRegister, validatorLogin } = require('../validators/auth')
const { loginCtrl, registerCtrl } = require('../controllers/auth')
const router = express.Router()


router.post('/register', validatorRegister, registerCtrl)

router.post('/login', validatorLogin, loginCtrl)

module.exports = router