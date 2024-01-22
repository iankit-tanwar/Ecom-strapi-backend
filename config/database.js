module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'localhost'),  // Use the domain only
        port: env.int('DATABASE_PORT', 6543),
        database: env('DATABASE_NAME', 'postgres'),
        username: env('DATABASE_USERNAME', 'postgres.jsggjeqxlxabceoqnetg'),
        password: env('DATABASE_PASSWORD', 'mypassword'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {},
    },
  },
});
