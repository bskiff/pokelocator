const request = require('request');
const filter = require('./filter.js');

const baseAddress = process.argv[2];
const lat = process.argv[3] || -33.87127072947451;
const long = process.argv[4] || 151.21185064315796;
const address = `https://${baseAddress}/map/data/${lat}/${long}`;

console.log('Calling GET ', address);
request(address, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    const parsedBody = JSON.parse(body);
    if(parsedBody.status != 'success') {
      console.log('unsuccessful response');
      process.exit(1);
    }

    const filtered = filter(parsedBody.pokemon);
    console.log(filtered);
    if(filtered.size > 0) {
      console.log("send notification")
    }
  } else {
    console.log('error!', error, response);
  }
})
