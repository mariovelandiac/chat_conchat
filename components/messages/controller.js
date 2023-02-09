const store = require('./store');
const {socket} = require('./../../socket');
const {config} = require('./../../config/config')

class Message {
    constructor() {

    }

    async addMessage(chat, user, message, file) {
        if (!chat || !user || !message) {
            console.error('[messageController]: No hay chat, usuario o mensaje')
            throw Error('Los datos son incorrectos')
        }

        let fileURL = '';
        if (file) {
          fileURL = `${config.host}:${config.port}${config.publicRoute}/files/${file.filename}`;
        }

        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
            file: fileURL
        }
        const rta = await store.add(fullMessage);
        socket.io.emit('message', rta)
        return rta
    }

    async getMessage(chat) {
        const rta = await store.list(chat)
        return rta
    }

    async update(id, changes) {
        if (!id || !changes) {
            throw Error('Invalid data')
        }
        const result = await store.update(id, changes)
        return result
    }

    async deleteMessage(id) {
        await store.deleteMessage(id);
    }



}

module.exports = Message
