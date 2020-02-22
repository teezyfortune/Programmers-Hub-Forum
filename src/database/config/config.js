require('dotenv').config();

module.exports = {
  development: {
    dialect: 'postgres',
    use_env_variable: 'DATABASE_URL',
  },
  test: {
    dialect: 'postgres',
    use_env_variable: 'TEST_DATABASE_URL',
  },
  production: {
    dialect: 'postgres',
    use_env_variable: 'DEVELOPMENT_DATABASE_URL',
  },
};
