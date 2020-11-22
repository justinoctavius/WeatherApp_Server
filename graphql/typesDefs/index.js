const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    GetWeather(lat: Float!, lon: Float!): WeatherData
  }

  type WeatherData {
    coord: Coord!
    weather: [Weather!]
    base: String!
    main: Main!
    visibility: Int!
    wind: Wind!
    clouds: Clouds!
    dt: Int!
    sys: Sys!
    timezone: Int!
    id: ID!
    name: String!
    cod: Int
  }

  type Coord {
    lon: Float!
    lat: Float!
  }

  type Weather {
    id: ID
    main: String!
    description: String!
    icon: String!
  }

  type Main {
    temp: Float!
    feels_like: Float!
    temp_min: Float!
    temp_max: Float!
    pressure: Int!
    humidity: Int!
  }

  type Wind {
    speed: Float!
    deg: Int!
  }

  type Clouds {
    all: Int!
  }

  type Sys {
    type: Int!
    id: ID!
    country: String!
    sunrise: Int!
    sunset: Int!
  }
`;

module.exports = typeDefs;
