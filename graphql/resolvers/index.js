const { GetWeather } = require('../../data');

const resolvers = {
  Query: {
    GetWeather: async (_, { lat, lon }) => await GetWeather(lat, lon)
  }
};

module.exports = resolvers;
