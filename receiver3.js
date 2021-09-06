//receiver 3
var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var exchange = 'object';

    channel.assertExchange(exchange, 'fanout', {
      durable: false
    });

    channel.assertQueue('', {
      exclusive: true
    }, function(error2, q) {
      if (error2) {
        throw error2;
      }
      
      channel.bindQueue(q.queue, exchange, '');

      channel.consume(q.queue, function(msg) {
        if(msg.content) {
            console.log(" Received: ", msg.content.toString());
          }
      }, {
        noAck: true
      });
    });
  });
});





// var amqp = require('amqplib/callback_api');

// amqp.connect('amqp://localhost', function(error0, connection) {
//     if (error0) {
//         throw error0;
//     }
//     connection.createChannel(function(error1, channel) {
//         if (error1) {
//             throw error1;
//         }

//         var queue = 'Queue3'

//         channel.assertQueue(queue, {
//             durable: false
//         });
//         channel.consume(queue, function(msg) {
//             console.log(" Received: ", msg.content.toString());
//         }, {
//             noAck:true
//         });
//     });
// });












