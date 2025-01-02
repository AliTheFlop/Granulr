const { Pool } = require("pg");

const PGPASS = process.env.PGPASS;

const pool = new Pool({
    user: "postgres",
    password: PGPASS,
    database: "Granulr",
    host: "localhost",
    port: 5432,
    max: 20,
    idleTimeoutMillis: 30000,
});

module.exports = pool;
