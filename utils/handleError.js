const handleHttpError = (res, message = 'Algo sucedio', code = 403) => {
    res
        .status(code)
        .send({ error: message })
}

module.exports = { handleHttpError }