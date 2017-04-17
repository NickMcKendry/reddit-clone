
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('link').del()
    .then(function () {
      // Inserts seed entries
      return knex('link').insert([
        {
          id: 1,
          votes: 35,
          url: 'http://www.google.com',
          title:'google'
        },
        {
          id: 2,
          votes: 14,
          url: 'http://www.sickspeed.com',
          title:'car parts'
        },
        {
          id: 3,
          votes: 70,
          url: 'http://www.stance.com',
          title:'car pictures'
        }
      ]);
    });
};
