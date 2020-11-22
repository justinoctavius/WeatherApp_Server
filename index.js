const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/typesDefs');
const resolvers = require('./graphql/resolvers');
require('dotenv').config();

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log('server running at ' + url));
