/**
 * Created by Dheerain on 14-07-2017.
 */

var  express =require('express');
var app=express();

var http=require('http');
var server=http.createServer(app);

var socket=require('socket.io');

var io=socket(server); // when ever i make this var /socket.io/socket.io.js this file is hosted on its own at this path

app.use('/',express.static('public_static'));

io.on('connection',function () {
   console.log("Connection established by the io socket");
});

server.listen(5000,function () {
    console.log("My http server is running ");
})

/*we are using socetss, which require the http server,, but we want to make the server using the express
* now what happpens is when we write http.createserver()  this cerates a empty server but when i pass appp as argument
* it runs a server for the app and runs the express server
*
* now we can use server as app
* socket is defined on the http server so we need a http server to us the socket
* */

/*socket=require('socket-io')
* this returna  function
* noow if we pass the server to the socket then we make the connection
*
* socket tries to re establish the connection again agina ehnr the connection breaks
*
* this is the soket we are writihn on the server and no ajxa cals are required
*
* */


/*
* the serrver side socke and client side socket shoud hosted on the same server */