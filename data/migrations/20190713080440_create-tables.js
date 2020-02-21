
exports.up = function(knex) {
  return knex.schema
    // list of schemes 
    .createTable('schemes', tbl => {
      tbl.increments();
//  title of scheme name 
      tbl.text('scheme_name', 128)
        .unique()
        .notNullable();
    })

    // list of steps take 
    .createTable('steps', tbl => {
      tbl.increments();
      // list of numbered steps 
      tbl.integer('step_number')
        .unsigned()
        .notNullable();
        // the instrustions taken on the quest 
      tbl.text('instructions')
        .notNullable();
        // the location of stored scheme based off id
      tbl.integer('scheme_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('schemes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('schemes');
};
