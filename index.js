var http = require('http');
var express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send("courses");
});

app.post('/pi', (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ "fulfillmentText": "welcome to pi app" }));
});

app.post('/hi', (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ "fulfillmentText": "Hello Hemant!" }));
});



var port = process.env.PORT || 1337;
app.listen(port);

console.log("Server running at http://localhost:%d", port);
