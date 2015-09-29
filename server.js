var Http = require('http');

var messages = ["Get up out mah' face", "Eric, you kick A as a developer!", "I can't allow you to do that, sir"];

var randomMessage = function(arr) {
  var num = Math.floor(Math.random()*(arr.length));
  return arr[num];
};

var onRequest = function(req, res) {
  if(req.method === 'GET') {
    res.writeHead(200, {
      'Connection': 'close',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify({message: randomMessage(messages)}));
  }
  else if (req.method === 'OPTIONS') {
    res.writeHead(200, {
      'Connection': 'close',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    });
    res.end();
  }
};


Http.createServer(onRequest).listen(8887);
console.log("chiming in on port " + 8887);