
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl
                .string('name', 128)
                .notNullable()
                .unique()
            tbl
                .string('description', 400)
                .notNullable()
            tbl
                .boolean('completed')
                .defaultTo(0)
                
            
        })
        
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('projects')
  
};
