/**
 * Created by Dheerain on 14-07-2017.
 */

/*now here we will write the code related to teh coket herer
* now when we write code here the file will find the socket code /socket.io/socket.io.js hhere */


/*what happens here si that ewhen we insatll the cocket module the file is hosted at a ceratain port
* this port is local host and this file is present at the server*/


$(function () {
    var socket=io();
    $('#btn').click(function () {

        var inp =$('#inp').val();
        socket.emit('rec_message',inp);

    });

    socket.on('get',function (data) {
        var msg= '<li>' +data+'</li>'
        $('#message').append(msg);
        console.log(data);
    })
});