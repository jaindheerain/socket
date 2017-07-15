/**
 * Created by Dheerain on 14-07-2017.
 */

/*now here we will write the code related to teh coket herer
* now when we write code here the file will find the socket code /socket.io/socket.io.js hhere */


/*what happens here si that ewhen we insatll the cocket module the file is hosted at a ceratain port
* this port is local host and this file is present at the server*/

/*var username=prompt("Please enter  your name ");
*/
var username = prompt("Enter username");

$(function() {
    var socket = io();

    $('#btn').click(function(){
        var inp = $('#inp').val();
        socket.emit('rec_message',{user: username,input :inp});



    });
    socket.on('get',function(data){

        var msg = '<li>' + data.user + ":" + data.input + '</li>';
        $('#message').append(msg);

    });

    socket.on('all',function(data) {
        data.forEach(function(client){
            var msg = '<li>' + client.user + ":" +
                client.input + '</li>';
        $('#message').append(msg);
    });


    })

});