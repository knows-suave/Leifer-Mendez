/**
@_QUE_HACE_ESTE_ARCHIVO_______________________________________________
        valida los datos
@_REQUIRE_______entrada_de_archivos___________________________________
        handleValidador :   confirma la validacion
@_EXPORTS_______salida_de_modulos_____________________________________
        validatorCreateItem :   datos necesarios
        validatorGetItem    :   datos necesarios
@_N_O_T_A_____________________________________________________________
        
*/

const { check } = require('express-validator')
const validateResults = require('../utils/handleValidator')

const validatorCreateItem = [
    check('name').exists().notEmpty(),
    check('album').exists().notEmpty(),
    check('cover').exists().notEmpty(),
    check('artist').exists().notEmpty(),
    check('artist.name').exists().notEmpty(),
    check('artist.nickname').exists().notEmpty(),
    check('artist.nationality').exists().notEmpty(),
    check('duration.start').exists().notEmpty(),
    check('duration.end').exists().notEmpty(),
    // check('duration.mediaId').exists().notEmpty().isMongoId(),
    (req, res, next) => { return validateResults(req, res, next) }
]

const validatorGetItem = [
    check('id').exists().notEmpty(),
    (req, res, next) => { return validateResults(req, res, next) }
]

module.exports = {
    validatorCreateItem,
    validatorGetItem
}