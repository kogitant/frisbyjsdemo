var frisby = require('frisby');
frisby
  .create('Simple http request status code example')
  .addHeader('User-Agent','Frisby')
  .get('https://api.github.com/users/kogitant/repos')
  //.inspectRequest()
  //.inspectResponse()
  .expectStatus(200)
.toss();
