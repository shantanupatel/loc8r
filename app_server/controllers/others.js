/* GET 'about' page */
const others = function(req, res) {
  res.render('index', { title: 'About' });
}

module.exports = { others }
