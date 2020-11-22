const axios = require('axios');

const GetWeather = async (lat, lon) => {
  const data = await axios(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`
  ).catch(err => console.log(err));

  return data ? data.data : null;
};

module.exports = GetWeather;
