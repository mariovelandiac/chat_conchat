const Model = require('./model');

async function getUser(userName) {
    const filter = {}
    if (userName != null) {
        filter.name = new RegExp(userName, 'i'); // Case Sensitive
    }
    const users = await Model.find(filter);
    return users
}

async function addUser(user) {
    const myUser = new Model(user);
    const newUser = await myUser.save();
    return newUser
}


module.exports = {
    add: addUser,
    list: getUser
}
