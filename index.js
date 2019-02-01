var http = require('http');

var server = http.createServer(function(request, response) {

    // console.log(request.body.queryResult);
    response.writeHead(200, {"Content-Type": "application/json"});
    let responseObj ={
        "fulfillmentText": "This is a text response",
        "fulfillmentMessages": [
          {
            "card": {
              "title": "card title",
              "subtitle": "card text",
             // "imageUri": "https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png",
              "buttons": [
                {
                  "text": "button text",
             //     "postback": "https://assistant.google.com/"
                }
              ]
            }
          }
        ],
        "source": "example.com",
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
          },
          "facebook": {
            "text": "Hello, Facebook!"
          },
          "slack": {
            "text": "This is a text response for Slack."
          }
        },
        "outputContexts": [
          {
            "name": "pristinepi",
            "lifespanCount": 5,
            "parameters": {
              "param": "param value"
            }
          }
        ],
        "followupEventInput": {
          "name": "event name",
          "languageCode": "en-US",
          "parameters": {
            "param": "param value"
          }
        }
      };
    response.end(JSON.stringify(responseObj));

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
