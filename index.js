var http = require('http');


var server = http.createServer(function(request, response) {

  

    response.writeHead(200, {"Content-Type": "application/json"});
    
   // response.end(JSON.stringify(responseObj));
   response.end(JSON.stringify({"fulfillmentText": "hello how are you?"})); 

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
