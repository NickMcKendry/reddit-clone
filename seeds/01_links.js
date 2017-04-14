
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('link').del()
    .then(function () {
      // Inserts seed entries
      return knex('link').insert([
        {
          votes: 35,
          url: 'http://www.google.com',
          title:'dope shit'
        },
        {
          votes: 14,
          url: 'http://www.sickspeed.com',
          title:'doper shit'
        },
        {
          votes: 70,
          url: 'http://www.stance.com',
          title:'dopest shit'
        }
      ]);
    });
};
