// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'joe',
      password: '123',
      database: 'flashcards'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

   production: {
    client: "pg",
    connection: {
      host: "ec2-52-45-73-150.compute-1.amazonaws.com",
      database: "d35r3augl6inmn",
      user: "tjjehsnhxzeduy",
      port: 5432,
      password: "d0b93466a66826863788b59a3ee71d95734ee93c17712fada461ec9063dd164d",
    },
     useNullAsDefault: true,
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },

};
