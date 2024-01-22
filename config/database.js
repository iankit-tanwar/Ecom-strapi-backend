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
        password: env('DATABASE_PASSWORD', '@Ankithubc01'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {},
    },
  },
});
