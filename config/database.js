module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        url: env('DATABASE_URL', 'postgres://user:password@localhost:5432/database'), // Replace with your actual URL
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {},
    },
  },
});
