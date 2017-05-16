// var pwd = require('./mysql-password.js');

module.exports = {
  development: {
    username: 'root',
    password: pwd,
    database: 'ecommerce',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  },
  production: {
    username: 'root',
    password: '',
    database: '',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
}
