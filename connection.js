const { Pool } = require("pg");
const credentials = new Pool({
  user: "postgres",
  password: "your-password",
  host: "localhost",
  port: 5432,
  database: "your-database",
  ssl: false
});

module.exports = credentials;