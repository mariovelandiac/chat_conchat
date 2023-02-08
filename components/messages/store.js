const Model = require('./model')

async function addMessage(message) {
    const myMessage = new Model(message);
    const newMessage = myMessage.save();
    return newMessage
};

async function getMessage(chat) {
    return new Promise((resolve,reject) => {
        let filter = {}
        if (chat != null) {
            filter.chat = chat// Case Sensitive
        }
        Model.find(filter).populate('user')
        .exec((err, populated) => {
            if (err) {
                reject(err);
                return false
            }
            resolve(populated)
        })
    })

}

async function update(id, changes) {
    let foundMessage = await this.findMessage(id)
    foundMessage = {
        ...changes
    }
    const newMessage = foundMessage.save();
    return newMessage
}

async function findMessage(id) {
    const foundMessage = await Model.findOne({
        _id: id
    });
    if (!foundMessage) {
        throw Error('message not found')
    }
    return foundMessage
}

async function deleteMessage(id) {
    const rta = Model.deleteOne({
        _id: id
    })
    return rta
}

module.exports = {
    add: addMessage,
    list: getMessage,
    update: update,
    deleteMessage: deleteMessage,
    findOne: findMessage
}
