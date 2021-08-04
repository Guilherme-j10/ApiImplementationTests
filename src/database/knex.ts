import knex from 'knex';
const Conn = knex({
  client: 'mysql2',
  connection: {
    database: 'tsbank',
    user: 'root',
    password: '',
    host: 'localhost'
  },
  pool: { min: 0, max: 2 }
});

export { Conn };