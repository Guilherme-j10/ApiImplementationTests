import knex from 'knex';
const Conn = knex({
  client: 'mysql2',
  connection: {
    database: 'solidapi',
    user: 'root',
    password: '',
    host: 'localhost'
  }
});

export { Conn };