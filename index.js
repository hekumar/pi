var http = require('http');
var express = require('express');

var bodyParser = require('body-parser')

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("courses");
});

app.post('/pi', (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    var x = JSON.parse(JSON.stringify(req.body));

    let result ='';
    result = x.queryResult.queryText;
   if( result.indexOf("talk")> -1 && result.indexOf("pi")> -1){
    

     const options = {
        hostname: 'localhost',
        port: 8080,
        path: '/pi',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': data.length
        },
        body: {
            command: "on"
        }

      }
      
      const req = https.request(options, (res) => {
        console.log(`statusCode: ${res.statusCode}`);
        
      
        res.on('data', (d) => {
          process.stdout.write(d)
          res.end("Talk to pi " +d);
        });
      });

   }
   
    res.end(JSON.stringify({ "fulfillmentText": "welcome to pi app" }));
});

app.post('/hi', (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ "fulfillmentText": "Hello Hemant!" }));
});



var port = process.env.PORT || 1337;
app.listen(port);

console.log("Server running at http://localhost:%d", port);
