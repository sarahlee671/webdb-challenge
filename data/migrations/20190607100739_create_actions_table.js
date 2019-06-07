

exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('actions', tbl => {
            tbl.increments('id');

            tbl
                .integer('project_id')
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')


            tbl
                .string('description', 500)
                .notNullable()

            tbl
                .string('note', 500)

            tbl
                .boolean('completed')
                .defaultTo(0)
        })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('actions')
  
};