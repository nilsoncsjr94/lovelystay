const initOptions = {/* initialization options */};
const pgp = require('pg-promise')({});
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'postgre',
    max: 30
};
export const db = pgp(cn);
// Exporting the database object for shared use:

