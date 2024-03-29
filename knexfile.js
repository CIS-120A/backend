// Update with your config settings.

module.exports = {
    // commented out because pg was not avaible on machine
    // created sqlite3 development connecton found on line 24

  // development: {
  //   client: 'pg',
  //   connection: {
  //     host: '127.0.0.1',
  //     user: 'joe',
  //     password: '123',
  //     database: 'flashcards'
  //   },
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: './db/migrations'
  //   },
  //   seeds: {
  //     directory: './db/seeds'
  //   }
  // },

    development: {
        client: 'sqlite3',
        connection: {
            filename: './db/my_db/cis120a.sqlite'
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
    connection: process.env.DATABASE_URL,
     useNullAsDefault: true,
       ssl: {
         require: true,
        rejectUnauthorized: false
       },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },

};
