import knex from 'knex';
import env from '../configs/env';

const db = knex({
    client: 'mysql',
    connection: {
        host : env.DB_HOST,
        user: env.DB_USER,
        password: env.DB_PASS,
        database: env.DB_NAME,
    },
    useNullAsDefault: true
});

export default db;