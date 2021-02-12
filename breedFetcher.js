const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?name=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (response.statusCode !== 200) {
      callback(error, 'api didn\'t like that');
    }
    if (data.length === 0) {
      callback(error, 'kitty not found');
    } else {
      callback(null,data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };