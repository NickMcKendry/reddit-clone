const pg = require('./knex')

function getAll() {
  return pg('link').select().orderBy('votes', 'desc')
}

function add(obj) {
  return pg('link').insert(obj)
}

function vote (id) {
  return pg('link').where('id', '=', id).increment('votes', 1)
}

function downVote (id) {
  return pg('link').where('id', '=', id).decrement('votes', 1)
}

function getPage (id) {
  return pg('comment')
  .join('link', 'link.id', 'comment.link_id')
  .select('*').where('link.id', '=', id)
}


function addComment (obj) {
  return pg('comment').insert(obj)
  .then(function (link_id) {
    return pg('comment')
    .join('link', 'link.id', 'comment.link_id')
    .select('*').where('link.id', '=', link_id)
  })
}


module.exports = {
  getAll,
  add,
  vote,
  downVote,
  getPage,
  addComment
}
