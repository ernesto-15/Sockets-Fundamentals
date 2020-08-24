const { io } = require('../server')

//Conexion del servidor
io.on('connection', (client) => {
  console.log('client connected');

  //Enviar informacion
  client.emit('sendMessage', {
    user: 'Admin',
    message: 'Welcome to Sockets',
  });

  //Desconexion del servidor
  client.on('disconnect', () => {
    console.log('client disconnected');
  });

  //Listen Client
  client.on('sendMessage', (message, callback) => {
    console.log(message);
    client.broadcast.emit('sendMessage', message)
    // if (message.user) {
    //   callback({
    //     response: 'OK',
    //   });
    // } else {
    //   callback({
    //     response: 'NOOO!!',
    //   });
    // }
  });
});
