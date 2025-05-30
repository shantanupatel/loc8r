/* GET 'home' page */
module.exports.homelist = function(req, res) {
  res.render('locations-list', { title: 'Home' });
};

/* GET 'location info' page */
module.exports.locationInfo = function(req, res) {
  res.render('location-info', { title: 'Location info' });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
  res.render('location-review-form', { title: 'Add review' });
};

// alternative way to exporting all the modules via a single export as compared to individual exports
// module.exports = { homelist, locationInfo, addReview };