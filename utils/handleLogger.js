/**
*@entra {url de slack}
*@sale {es_una_nota_para_todos_los_programadores}
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