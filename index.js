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
    
    var post_data = JSON.stringify({
        'compilation_level' : 'ADVANCED_OPTIMIZATIONS',
        'output_format': 'json',
        'output_info': 'compiled_code',
          'warning_level' : 'QUIET',
          'js_code' : "codestring"
    });
  
    // An object of options to indicate where to post to
    var post_options = {
        host: 'localhost',
        port: '8080',
        path: '/pi',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(post_data)
        }
    };
     // Set up the request
  var post_req = http.request(post_options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('Response: ' + chunk);
    });
});

// post the data
console.log();
post_req.write(post_data);
post_req.end();

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
