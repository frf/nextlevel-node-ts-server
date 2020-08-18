import path from 'path';
import env from './src/configs/env';

module.exports = {
    client: 'pg',
    connection: env.DATABASE_URL,
    searchPath: ['knex', 'public'],
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true
};