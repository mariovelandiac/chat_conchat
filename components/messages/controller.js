const store = require('./store');

class Message {
    constructor() {

    }

    async addMessage(user, message) {
        if (!user || !message) {
            console.error('[messageController]: No hay usuario o mensaje')
            throw Error('Los datos son incorrectos')
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        }
        store.add(fullMessage)
        return fullMessage
    }

    async getMessages() {
        const rta = store.list()
        return rta
    }
}

module.exports = Message