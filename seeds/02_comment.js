
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
        {
          id: 1,
          comment_text: 'dope shit',
          link_id: 1,
          username: 'fuckboy123'
        },
        {
          id: 2,
          comment_text: 'dope shit',
          link_id: 1,
          username: 'fuckboy123'
        },
        {
          id: 3,
          comment_text: 'dope shit',
          link_id: 2,
          username: 'fuckboy123'
        }
      ]);
    });
};
