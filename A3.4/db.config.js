module.exports = {
    host: process.env.DB_HOST || 'localhost',
    name: process.env.DB_NAME || 'app',
    user: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'secret'
  };