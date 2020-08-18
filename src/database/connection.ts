import knex from 'knex';
import env from '../configs/env';

const db = knex({
    client: 'pg',
    connection: env.DATABASE_URL,
    searchPath: ['knex', 'public'],
    useNullAsDefault: true
});

export default db;