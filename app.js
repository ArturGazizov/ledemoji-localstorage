const http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;




const server =http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
})





server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


/*var app = require('express')();

    app.get('/',function(request,response){
       response.sendFile(__dirname+'/index.html');
    });

    app.listen('3000');
*/
/*
const server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});

  var file = fs.createReadStream('index.html');
  file.pipe(response);

})


var mongoose = require('mongoose')

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/