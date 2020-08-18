import path from 'path';
import env from './src/configs/env';

module.exports = {
    client: 'mysql',
    connection: {
        host : env.DB_HOST,
        user: env.DB_USER,
        password: env.DB_PASS,
        database: env.DB_NAME,
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true
};