var express = require("express");
var app = express();
var path = require('path');
app.use(express.static('public'));


app.get("/spaceDog", function(req, res){
    res.sendfile('./templates/websitelist.html')
});

var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log("Listening on " + port);
});