var http = require('http');

var server = http.createServer(function(request, response) {

    // console.log(request.body.queryResult);
    response.writeHead(200, {"Content-Type": "application/json"});
    let responseObj ={
        "fulfillmentText" : " ",
        "fulfillmentMessages": [
            {
              "text": {
                "text": [
                    "Hello Hemant! How are you?"
                ]
              }
            }
          ],
        "source" : ""

    }
    response.end(JSON.stringify(responseObj));

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
