/**
@_QUE_HACE_ESTE_ARCHIVO_______________________________________________
        se encarga de asegurar los datos
@_REQUIRE_______entrada_de_archivos___________________________________
        handleValidator :   validateResultado   :   confirma que los datos son correctos
@_EXPORTS_______salida_de_modulos_____________________________________
        exportaciones_del_archivo
@_N_O_T_A_____________________________________________________________
        check, ignora la informacion que no cumple los requisitos
*/


const { check } = require('express-validator')
const validateResults = require('../utils/handleValidator')

const validatorGetItem = [
    check('id').exists().notEmpty(),
    (req, res, next) => { return validateResults(req, res, next) }
]

module.exports = {
    validatorGetItem
}