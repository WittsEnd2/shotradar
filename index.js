var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var users=0;
var curr="";


app.get('/', function(req, res){
  res.sendFile(__dirname + '/landing.html');
});


app.get('/map', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/tips', function(req, res){
  res.sendFile(__dirname + '/tips.html');
});

app.get('/reset', function(req, res){
  users = 0;
  curr="";
  res.sendFile(__dirname + '/del.html');
});

app.get('/users', function(req,res){
  res.setHeader('Content-Type', 'application/json');
  res.send({'counter':users, 'lastShot':curr}, null, 3);
});

app.get('/lastShot', function(req,res){
  res.setHeader('Content-Type', 'application/json');
  res.send(curr, null, 3);
});



var last_activated = 1;

io.on('connection', function(socket){
  users++; // update the number of users that are on the system
  var msg = "c" + users; // make the msg of new user group
  io.emit('new_user', msg); // emit that a new user is connected

  socket.on('clap_detected', function(user){
    var data = {last:last_activated, curr:user}
    curr = user
     io.emit('clap_detected', data);
  });


});




http.listen(port, function(){
  console.log('listening on http://localhost:' + port);
});
