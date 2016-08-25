exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE quote RESTART IDENTITY CASCADE')
};
