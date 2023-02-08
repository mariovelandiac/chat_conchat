const store = require('./store');


async function addUser(name) {
    if (!name) {
        return Promise.reject('Invalid name')
    }
    const user = {
        name: name
    }
    const newUser = await store.add(user);
    return newUser
}

async function getUser(userName) {
    const users = await store.list(userName);
    return users
}

module.exports = {
    add: addUser,
    getUser: getUser
}