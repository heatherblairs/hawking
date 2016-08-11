
exports.up = function(knex, Promise) {
  return knex.schema.createTable("quote", function(table){
    table.increments();
    table.text("quote");
    table.text("drink");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("quote")
};
