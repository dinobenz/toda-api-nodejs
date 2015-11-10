var APIeasy = require('api-easy'),
    assert = require('assert'),
    http = require('http'),
    director = require('director'),
    app = require('../server');

var suite = APIeasy.describe('api/test');

suite.discuss('When using our API')
     .use('localhost', 9000)
     .setHeader('Content-Type', 'application/json')
     .get('/api')
      .expect(200, { message: 'hooray! welcome to our api!' })
     .get('/api/geolocation/cities')
      .expect(200, [{ code: "BKK", iso: "TH-10", name: "กรุงเทพมหานคร" }, { code: "KRI", iso: "TH-71", name: "จังหวัดกาญจนบุรี" }])
     .get('/api/geolocation/cities/TH-10')
      .expect(200, { code: "BKK", iso: "TH-10", name: "กรุงเทพมหานคร" })
     .get('/api/geolocation/cities/TH-00')
      .expect(204)
     .export(module);
