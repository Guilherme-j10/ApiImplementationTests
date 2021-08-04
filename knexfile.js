module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database : 'tsbank'
    },
    migrations: {
      tableName: 'migrations_knex'
    }
  }
};
