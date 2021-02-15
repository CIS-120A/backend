exports.up = async function(knex) {
  await knex.schema.createTable('scores', sc => {
      sc.increments('id').primary();
      sc.string('name').notNullable();
      sc.integer('score').notNullable();
      sc.integer('chapter').notNullable();
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('scores');
};
