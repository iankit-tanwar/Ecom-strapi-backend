const path = require("path");


module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'aws-0-ap-south-1.pooler.supabase.com'),  // Use the domain only
        port: env.int('DATABASE_PORT', 6543),
        database: env('DATABASE_NAME', 'postgres'),
        username: env('DATABASE_USERNAME', 'postgres.jsggjeqxlxabceoqnetg'),
        password: env('DATABASE_PASSWORD', 'px8UC2upbqIeaU2e'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {},
    },
  },
});
