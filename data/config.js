const knex = require("knex");
const { development } = require("../knexfile");
const knexConfig = require("../knexfile");

const env = process.env.NODE_ENV || development
module.exports = knex(knexConfig[env])