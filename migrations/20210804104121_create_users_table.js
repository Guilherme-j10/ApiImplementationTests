exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id_user');
    table.string('name_user', 255);
    table.string('email_user', 255);
    table.string('password_user', 255);
  })  
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
