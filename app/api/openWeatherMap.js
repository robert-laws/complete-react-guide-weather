var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=421d360cc3ebe08f01a7fd98d94a7ab6&units=imperial';

// 421d360cc3ebe08f01a7fd98d94a7ab6

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      debugger;
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(err) {
      // throw new Error(err.reponse.data.message);
      throw new Error('Unable to fetch weather for that location.');
    });
  }
}
