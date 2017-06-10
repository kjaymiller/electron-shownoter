const request = require('request')
const feedparser = require('node-feedparser')
const fs = require('fs')
const parser = require('xml2js').parseString
const util = require('util')

fs.readFile('./app/overcast.opml', 'utf8', function(err, data) {
  parser(data, function(err, result) {
   var opml = result.opml.body[0]['outline'];
   for (i = 0; i < opml.length; i++) {
     var index = opml[i].$;
     var title = index.title;
     var rssUrl = index.xmlUrl;

     // Fetch the RSS Feed For Each Podcast
     request(rssUrl, function(err, resp, body) {
       parser(body, function(error, ret) {
         console.log(util.inspect(ret.rss));
       });
     });

    //  console.log (rss, title)

   };
  });
});
