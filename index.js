const got = require('got');

got.get('http://118.210.97.74:443/up', {responseType: 'text'})
  .then(res => {
		console.log(`Request Sent! Response from server:`);
  })
  .catch(err => {
    console.log('Error: ', err.message);
  });