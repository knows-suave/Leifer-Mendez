/**
@_entra__________________________
_ _ _ url de slack
@_sale___________________________
_ _ _ la conexion a slack
@_NOTA___________________________
_ _ _ envia los errores al chat de slack que es similar a discord
*/

const { IncomingWebhook } = require('@slack/webhook')

const webHook = new IncomingWebhook(process.env.SLACK_WEBHOOK)

const loggerStream = {
    write: message => {
        webHook.send({
            text: message
        })
    }
}

//aqui empieza la exportacion de modulos
module.exports = {
    loggerStream,
}