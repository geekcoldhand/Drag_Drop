require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: 5432, 
    database: process.env.POSTGRES_DB
  });

  module.exports = {
    query: (text, params) => pool.query(text, params)
  };