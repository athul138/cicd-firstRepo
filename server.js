var http=require('http');

var server=http.createServer(function(req,res){
    res.end('server instance created');
});
var port = 3000
server.on('listening',function(){
    console.log('ok, server is running on port '+port);
});



server.listen(port);         


