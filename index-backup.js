



	const axios = require('axios')

axios
  .post('http://118.210.97.74:443/drop', {
  })
  .then((res) => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch((error) => {
    console.log('a')
  })