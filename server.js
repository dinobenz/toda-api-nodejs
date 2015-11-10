// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');
var City       = require('./app/models/city');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 9000; 		// set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); 				// get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:9000/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

// more routes for our API will happen here

// on routes that end in /geolocation/cities
// =============================================================================
router.route('/geolocation/cities')
	// get all the bears (access at GET http://localhost:9000/api/geolocation/cities)
	.get(function(req, res) {
		var cities = City.getAll();
		res.json(cities);
	});

// on routes that end in /geolocation/cities/:iso
// =============================================================================
router.route('/geolocation/cities/:iso')
	// get the bear with that id (accessed at GET http://localhost:9000/api/geolocation/cities/:iso)
	.get(function(req, res) {
		var city = City.get(req.params.iso);
		if (city != null) {
			return res.json(city);
		} else {
			return res.send(204);
		}
	});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);