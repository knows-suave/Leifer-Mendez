/**
@_QUE_HACE_ESTE_ARCHIVO_________________________________
_ _ _ es como un directorio de modelos
@_entrada_de_archivos___________________________________
_ _ _ los modelos de la carpeta nosql
@_salida_de_modulos_____________________________________
_ _ _ un objeto o diccionario de los modelos
@_N_O_T_A_______________________________________________
_ _ _ 
*/

const models = {
    usersModel: require('./nosql/users'),
    tracksModel: require('./nosql/tracks'),
    storageModel: require('./nosql/storage')
}

module.exports = models