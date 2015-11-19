var http = require('http'); // Module provided by Node

// var handleRequest = function(req, res){
//   // req = request, what the client sends the server
//   // res = response, what you will send back to the client
//
//
//   res.setHeader('Content-Type', 'text/html');
//   res.statusCode = 200;
//   res.end('<h1>Hello, world!</h1>');
//
// }

var x = 0;

var handleRequest = function(req, res){
  console.log(req.method + ' request at ' + req.url);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.statusCode = 200;
  x++;
  console.log(`I have gotten ${x} requests since starting.`)
  // console.log('I have gotten ' + x + ' requests since starting.');
  res.end(JSON.stringify({times: x}));
}

var server = http.createServer();


server
  .on('request', handleRequest)
  .listen(9001);

































// var http = require('http')
// var me = require('./jacob')
//
// // var onRequest = function(req, res){
// //   // req = request - What the server gets from the client/browser/user
// //   // res = response - an object you use to send a response from the server to the client/browser/user
// //   res.statusCode = 200;
// //   res.setHeader('Content-Type', 'text/html')
// //   res.end('<h1>Hi, you!</h1>')
// //
// // }
//
// var onRequest = function(req, res){
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'application/json')
//   res.end(JSON.stringify(me))
// }
//
// var server = http.createServer()
// server.on('request', onRequest)
// server.listen(9001)
