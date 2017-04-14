const config = require('../knexfile')

const enviroment = 'development'
const connection = config[enviroment]

const pg = require('knex')(connection)

module.exports = pg
