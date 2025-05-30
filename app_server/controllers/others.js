/* GET 'about' page */
const others = function(req, res) {
  res.render('generic-text', { 
    title: 'About Loc8r',
    content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Non natus totam similique dolorum molestiae porro placeat quia iusto. Explicabo quo voluptatem esse nostrum molestiae. Labore consectetur ipsam blanditiis fugiat nostrum.\n\nLorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptates fugit obcaecati omnis mollitia amet delectus! Hic distinctio explicabo voluptas beatae laudantium est, ea repudiandae deserunt illo, numquam ullam iste!\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatum tempore veritatis. Sapiente praesentium odit accusantium soluta et eius, qui nulla repellat culpa beatae, laborum delectus, esse maxime iusto ipsum.',
  });
}

module.exports = { others }
