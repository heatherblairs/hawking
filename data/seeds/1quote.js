
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('quote').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('quote').insert({quote: "Life would be tragic if it weren't funny.", drink: "Mimosa"}),
        knex('quote').insert({quote: "We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the Universe. That makes us something very special.", drink: "Cosmo" }),
        knex('quote').insert({quote: "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.", drink: "Martini"})
      ]);
    });
};
