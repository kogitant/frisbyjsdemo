var frisby = require('frisby');
frisby
  .create('Expect unordered json array to contain an element with at least specified values')
  .addHeader('User-Agent','Frisby')
  .get('https://api.github.com/users/kogitant/repos')
  .expectJSON('?', {
    id: 6043588,
    name: 'jenkins-radiator'
  })
.toss();
