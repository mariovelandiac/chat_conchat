const Model = require('./model');


async function getChat(userId) {
    return new Promise (async (resolve, reject) => {
        const filter = {};
        if (userId) {
            filter.users = userId;
        }
        Model.find(filter).populate('users')
        .exec((err, populated) => {
            if (err) {
                reject(err);
                return false
            }
            resolve(populated)
        })
    })

}

async function addChat(chat) {
    const myChat = new Model(chat);
    const newChat = await myChat.save();
    return newChat
}


module.exports = {
    add: addChat,
    list: getChat
}
