// This is a change from my host machine

var http = require('http');
var redis = require('redis');

var client = redis.createClient();

http.createServer(function (req, res) {
  client.mget(['awesome','cool', 'rad', 'gnarly','groovy'], function(error, responses){
  		res.writeHead(200,{'Content-Type': 'text/html'});
  		res.end('<p>awesomeCount:</p> ' + responses[0] + '<p>gnarlyCount:</p>' + responses[1] + '<p>radCount:</p>' + responses[2] +
  			'<p>groovyCount:</p>' + responses[3]);


  });

  /*client.get('awesome', function(error, awesomeCount) {
    if(error){
    	  awesomeCount = error;
  		  }
      else if(!error){
  		  	  
      	  res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end('awesomeCount:' + awesomeCount);
      		  }
});*/
}).listen(3000);

console.log('Server running on port 3000');
