
exports.up = async function(knex) {
  await knex.schema.createTable('flashcards', fc => {
      fc.increments('id').primary();
      fc.string('term').notNullable();
      fc.text('definition').notNullable();
      fc.integer('chapter').notNullable();
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('flashcards')
};
