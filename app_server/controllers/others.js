/* GET 'about' page */
const others = function(req, res) {
  res.render('generic-text', { title: 'About' });
}

module.exports = { others }
