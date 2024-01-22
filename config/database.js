const { Client } = require('pg');

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'aws-0-ap-south-1.pooler.supabase.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'postgres'),
        username: env('DATABASE_USERNAME', 'postgres.jsggjeqxlxabceoqnetg'),
        password: env('DATABASE_PASSWORD', 'mypassword'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {},
    },
  },
});
