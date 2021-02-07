exports.seed = async function(knex) {
    function pgTruncate(table) {
        return knex.raw('TRUNCATE TABLE ?? START IDENTITY CASCADE', table)
    }
    return await knex('flashcards').truncate();
};
