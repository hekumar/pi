var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "application/json"});
    let responseObj ={
        "fulfillmentText" : " ",
        "fulfillmentMessages" : [ { "test" : {"text" : ["Hello Hemant! How are you?"]}}]

    }
    response.write(responseObj);

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
