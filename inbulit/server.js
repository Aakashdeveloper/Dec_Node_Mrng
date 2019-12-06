var http = require('http');
var port = 6700;

var server = http.createServer(function(req,res){
   res.write('<h1>Hii from node server</h1>')
})

server.listen(port, function(){
    console.log("Server is running on port "+port)
})