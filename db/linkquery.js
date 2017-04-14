const pg = require('./knex')

function getAll() {
  return pg('link').select().orderBy('votes')
}

function add(obj) {
  return pg('link').insert(obj)
}

function vote (id) {
  return pg('link').where('id', '=', id).increment('votes', 1)
}


module.exports = {
  getAll,
  add,
  vote
}
