const faunadb = require("faunadb");
const fetch = require("node-fetch");
const { faunaConfig } = require("./secret");
require("dotenv").config();

const client = new faunadb.Client(Object.assign({ fetch }, faunaConfig));

module.exports = client;
