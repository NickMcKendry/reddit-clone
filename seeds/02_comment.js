
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
        // {
        //   id: 1,
        //   comment_text: 'cool',
        //   link_id: 1,
        //   username: 'testuser'
        // },
        // {
        //   id: 2,
        //   comment_text: 'dope',
        //   link_id: 1,
        //   username: 'testuser'
        // },
        // {
        //   id: 3,
        //   comment_text: 'word',
        //   link_id: 2,
        //   username: 'testuser'
        // }
      ]);
    });
};
