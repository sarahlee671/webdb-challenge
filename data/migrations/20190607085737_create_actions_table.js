exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('actions', tbl => {
            tbl.increments();

            tbl
                .string('description', 400)
                .notNullable()

            tbl
                .string('notes', 400)

            tbl
                .boolean('completed')
                .defaultTo(0)
        })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('actions')
  
};