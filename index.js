var http = require('http');
//const { WebhookClient } = require('dialogflow-fulfillment');

 //Create an instance
 //const agent = new WebhookClient({request: request, response: response});

var server = http.createServer(function(request, response) {

    console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));

    console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
   

    response.writeHead(200, {"Content-Type": "application/json"});
    
   // response.end(JSON.stringify(responseObj));
   response.end(JSON.stringify({
    "payload": {
      "google": {
        "expectUserResponse": true,
        "richResponse": {
          "items": [
            {
              "simpleResponse": {
                "textToSpeech": "this is a simple response"
              }
            }
          ]
        }
      }
    }
  })); 

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
