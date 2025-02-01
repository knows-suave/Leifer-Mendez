/**
@_QUE_HACE_ESTE_ARCHIVO_______________________________________________
_ _ _ da el mensaje de error
_ _ _ reutilizacion de codigo
_ _ _ 
@_REQUIRE_______entrada_de_archivos___________________________________
_ _ _ 
_ _ _ 
@_EXPORTS_______salida_de_modulos_____________________________________
_ _ _ handleHttpError   :   mensaje de error
_ _ _ 
_ _ _ 
@_N_O_T_A_____________________________________________________________
_ _ _ 
*/


const handleHttpError = (res, message = 'Algo sucedio', code = 403) => {
    res
        .status(code)
        .send({ error: message })
}

module.exports = { handleHttpError }