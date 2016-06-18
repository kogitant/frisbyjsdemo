var frisby = require('frisby');
frisby
  .create('Get Github user kogitant repos')
  .addHeader('User-Agent','Frisby')
  .get('https://api.github.com/users/kogitant/repos')
  .expectJSON('?', {
    id: 6043588,
    name: 'jenkins-radiator'
  })
.toss();
