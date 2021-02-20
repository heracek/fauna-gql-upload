const getConfig = require("./getConfig");
const config = getConfig();
require("dotenv").config({
  path: config.envPath || '.env'
});

const {
  secretEnv = "FAUNADB_SECRET",
  baseUrlEnv = "FAUNADB_BASE_URL",
  graphqlBaseUrlEnv = "FAUNADB_GRAPHQL_BASE_URL"
} = config;

const secret = process.env[secretEnv];
const baseUrl = process.env[baseUrlEnv];
const graphqlBaseUrl = process.env[graphqlBaseUrlEnv];

const faunaUrl = new URL(baseUrl || "https://db.fauna.com");

module.exports = {
  faunaConfig: {
    domain: faunaUrl.hostname,
    scheme: faunaUrl.protocol.replace(":", ""),
    port: faunaUrl.port ? parseInt(faunaUrl.port, 10) : undefined,
    secret,
  },
  grapqlBaseUrl: graphqlBaseUrl || "https://graphql.fauna.com"
};
