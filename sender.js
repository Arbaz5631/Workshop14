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
    var msg ={type:"text",message:"RabbitMQ is running"};

    channel.assertExchange(exchange, 'fanout', {
      durable: false
    });
    channel.publish(exchange, '', Buffer.from(JSON.stringify(msg)));
    console.log(" Sent Message", msg);
  });

  setTimeout(()=> {
    connection.close();
  }, 500);
});



// var amqp = require('amqplib/callback_api');

// amqp.connect('amqp://localhost', function(error0, connection) {
//   if (error0) {
//     throw error0;
//   }
//   connection.createChannel(function(error1, channel) {
//     if (error1) {
//       throw error1;
//     }
//     var queue1 = 'Queue1';
//     var queue2 = 'Queue2';
//     var queue3 = 'Queue3';
//     var msg = {type:"text",message:"Hello! Message Is Send"};

//     channel.assertQueue(queue1, {
//       durable: false
//     });
//     channel.assertQueue(queue2, {
//       durable: false
//     });
//     channel.assertQueue(queue3, {
//       durable: false
//     });

//     channel.sendToQueue(queue1, Buffer.from(JSON.stringify(msg)));
//     channel.sendToQueue(queue2, Buffer.from(JSON.stringify(msg)));
//     channel.sendToQueue(queue3, Buffer.from(JSON.stringify(msg)));
//     console.log(" Sent", msg);
//   });
//   setTimeout(function() {
//     connection.close();
//     process.exit(0)
//     }, 1000);
// });


