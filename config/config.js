require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || 'dev',
    isProd: process.env.NODE_ENV == 'production',
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    cors: process.env.CORS,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app'
}

const userEncode = encodeURIComponent(config.dbUser);
const passwordEncode = encodeURIComponent(config.dbPassword);
const dbName = encodeURIComponent(config.dbName);

config.dbURL = `mongodb+srv://${userEncode}:${passwordEncode}@${config.dbHost}/${dbName}?retryWrites=true`;



module.exports = {config}
