module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'aws-0-ap-south-1.pooler.supabase.com'),  // Use the domain only
        port: env.int('DATABASE_PORT', 5432),  // Update to the correct port
        database: env('DATABASE_NAME', 'postgres'),
        username: env('DATABASE_USERNAME', 'postgres.jsggjeqxlxabceoqnetg'),
        password: env('DATABASE_PASSWORD', 'mypassword'),
        ssl: true,  // Set to true if your PostgreSQL database requires SSL
      },
      options: {},
    },
  },
});
