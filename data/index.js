const axios = require('axios');

const GetWeather = async (lat, lon) => {
  const data = await axios(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${process.env.API_KEY}&lang=es&units=metric`
  ).catch(err => console.log(err));

  return data ? data.data : null;
};

module.exports = { GetWeather };
