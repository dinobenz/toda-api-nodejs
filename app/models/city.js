// app/models/city.js

var cities = [{ code: "BKK", iso: "TH-10", name: "กรุงเทพมหานคร" }, { code: "KRI", iso: "TH-71", name: "จังหวัดกาญจนบุรี" }];

exports.getAll = function () {
	return cities;
}

exports.get = function (iso) {
	var city = null;
	for (var i = 0; i < cities.length; i++) {
		if (cities[i].iso == iso) {
			city = cities[i];
			break;
		}
	}
	return city;
}