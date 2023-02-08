const db = require('mongoose');
const {config} = require('./config/config');
db.Promise = global.Promise;

async function connect() {
    try {
        await db.connect(config.dbURL, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.log('[db connection] Database connected')
        })
    } catch (e) {
        console.error('[db connection] Connection failed', e.message)
    }
    await db.connect()
    .catch( error => {
         
    });
}


module.exports = connect