var frisby = require('frisby');
frisby
  .create('Verify Etuovi.com custom URL redirects to correct destination URL')
  .get('http://www.etuovi.com/asuntovaris', {followRedirect: false})
  .expectStatus(302)
  .expectHeader('location', 'http://www.etuovi.com/yritys/1486/asunto-ja-kiinteistopalvelu-varis-lkv?short=asuntovaris')
  .after(function (err, res) {
    console.log("res.headers.location=" + res.headers.location);
  })
  .toss();


frisby
  .create('Request final destination')
  .get('http://www.etuovi.com/asuntovaris')
  .expectStatus(200)
  .expectBodyContains('Asiakasläheistä välittämistä')
  .toss();
