require("dotenv").config();
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      // database: process.env.DATABASE_DB,
      // user: process.env.DATABASE_USER,
      // password: process.env.DATABASE_PASSWORD,
      filename: "./data/test.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
