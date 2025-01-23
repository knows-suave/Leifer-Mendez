const customHeader = (req, res, next) => {
    console.log('customHeader')
    // console.log(req.body)
    // next()
    try {
        const apiKey = req.headers.api_key //heraders tiene api_key
        if (apiKey === 'david') {
            next()
        } else {
            res
                .status(403)
                .send({ error: 'apikey no es correcta' })
        }
    } catch (error) {
        res
            .status(403)
            .send({ error: 'algo ocurrio en el customHeader' })
    }
}

module.exports = customHeader