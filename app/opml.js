const fs = require('fs')
const parser = require('xml2js').parseString

fs.readFile('./app/overcast.opml', 'utf8', function(err, data) {
  parser(data, function(err, result) {
    console.log(result.opml.body[0]);
  });
});
