const pgp = require('pg-promise')()
const config = require('config')
const connectionString = process.env.DATABASE_URL || config.get('db')
const db = pgp(connectionString)

module.exports = db
