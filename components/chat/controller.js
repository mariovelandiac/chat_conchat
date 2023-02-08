const store = require('./store');


async function addChat(users) {
    if (!users || !Array.isArray(users)) {
        return Promise.reject('Invalid user list')
    }
    const chat = {
        users: users
    }
    const newUser = await store.add(chat);
    return newUser
}

async function getChat(userId) {
    const users = await store.list(userId);
    return users
}

module.exports = {
    add: addChat,
    getChat: getChat
}