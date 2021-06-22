
exports.up = function (knex) {
    return knex.schema.createTable('Persons', table => {
        table.increments('id')
        table.string('name').notNullable().unique()
        table.string('first_name')
        table.string('last_name')
        table.timestamps(true, true)
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('Persons')
};
