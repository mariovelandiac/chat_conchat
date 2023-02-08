
const success = function (req, res, message, status) {
    if (typeof status != 'number') {
        throw Error('Status must be a number')
    }
    res.status(status || 200).json({
        error: '',
        body: message
    })
}

const error = function (req, res, message, status, details) {
    console.error(`[response error]: ${details}`)
    res.status(status || 500).json({
        error: message,
        body: ''
    })
}


module.exports = {error, success}