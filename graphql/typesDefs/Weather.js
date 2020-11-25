const { gql } = require('apollo-server');

const weatherTypesDefs = gql`
  type Query {
    GetWeather(lat: Float!, lon: Float!): WeatherData
  }

  type WeatherData {
    timezone: String!
    timezone_offset: Int!
    lat: Float!
    lon: Float!
    current: Current!
    daily: [Daily!]!
    alerts: Alerts
  }

  type Current {
    dt: Int!
    sunrise: Int!
    sunset: Int!
    temp: Float!
    feels_like: Float!
    pressure: Int!
    humidity: Int!
    dew_point: Float!
    uvi: Float!
    clouds: Int!
    visibility: Int!
    wind_speed: Float!
    wind_deg: Int!
    weather: [Weather]!
  }

  type Daily {
    dt: Int!
    sunrise: Int!
    sunset: Int!
    temp: Temp!
    feels_like: Feels_like!
    pressure: Int!
    humidity: Int!
    dew_point: Float!
    wind_speed: Float!
    wind_deg: Float!
    weather: [Weather]!
    clouds: Int!
    pop: Float!
    rain: Float
    snow: Float
    uvi: Float!
  }

  type Alerts {
    sender_name: String!
    event: String!
    start: Int!
    end: Int!
    description: String!
  }

  type Feels_like {
    day: Float!
    night: Float!
    eve: Float!
    morn: Float!
  }

  type Temp {
    day: Float!
    min: Float!
    max: Float!
    night: Float!
    eve: Float!
    morn: Float!
  }

  type Weather {
    id: ID
    main: String!
    description: String!
    icon: String!
  }
`;

module.exports = weatherTypesDefs;
