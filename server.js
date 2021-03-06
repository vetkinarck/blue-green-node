var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/', function(req, res){
    res.sendFile('client.html', { root: __dirname + "/static" } );
});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  app.use(express.static('static'))

  console.log("Example app listening at http://%s:%s", host, port)

})
