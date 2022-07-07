const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
console.log('config',config)

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT'),
      database: env('DATABASE'),
      user: env('DATABASE_USER'),
      password: env('DATABASE_PASSWORD'),
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});