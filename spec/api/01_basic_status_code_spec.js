var frisby = require('frisby');
frisby
  .create('Get Github user kogitant repos')
  .addHeader('User-Agent','Frisby')
  .get('https://api.github.com/users/kogitant/repos')
  //.inspectRequest()
  //.inspectResponse()
  .expectStatus(200)
.toss();
