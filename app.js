var express = require("express");
var fs = require('fs');
const port = process.env.PORT || 3000

var app = express();
    app.set("view options", {layout: false});
    app.use(express.static(__dirname));

app.get('/', function(req, res){
    res.render('index.html');
});

app.listen(port);
console.log('Express server started');
