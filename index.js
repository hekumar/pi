var http = require('http');
var express = require('express');
const PubNub = require("pubnub");
var bodyParser = require('body-parser')

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const pubnubDemo = new PubNub({

    publishKey: "pub-c-2d98e188-d8e8-46fb-a165-10fbee0525cb", // Use your pub key
    subscribeKey: 'sub-c-b3f3f9b6-2a0b-11e9-934b-52f171d577c7' // Use your sub key
  
  });

app.get('/', (req, res) => {
    res.send("courses");
});

app.post('/pi', (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    var x = JSON.parse(JSON.stringify(req.body));

    let result = '';
    result = x.queryResult.queryText;
    if (result.indexOf("talk") > -1 && result.indexOf("pi") > -1) {
        // Publish a simple message to the demo_tutorial channel

        pubnubDemo.publish({
            message: {
                "command": "welcome to pi app"
            },
            channel: 'my-pi'
        });

      
        res.end(JSON.stringify({ "fulfillmentText": "getting ready.." }));
    }
    else if(result.indexOf("on") > -1 && result.indexOf("led") > -1 || result.indexOf("LED") > -1 || result.indexOf("light") > -1) {

        pubnubDemo.publish({
            message: {
                "command": "led on"
            },
            channel: 'my-pi'
        });

      
        res.end(JSON.stringify({ "fulfillmentText": "turning led on please wait..." }));
    }

    else if(result.indexOf("off") > -1 && result.indexOf("led") > -1 || result.indexOf("LED") > -1 || result.indexOf("light") > -1) {

        pubnubDemo.publish({
            message: {
                "command": "led off"
            },
            channel: 'my-pi'
        });

        res.end(JSON.stringify({ "fulfillmentText": "turning led off please wait..." }));
    }
    else {
        res.end(JSON.stringify({ "fulfillmentText": "pi don't know that." }));
    }

  
});

app.post('/hi', (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ "fulfillmentText": "Hello Hemant!" }));
});



var port = process.env.PORT || 1337;
app.listen(port);

console.log("Server running at http://localhost:%d", port);
