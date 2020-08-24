const express = require('express');
const path = require('path');
const http = require('http');
const socket = require('socket.io');

//Inicializacion de Express
const app = express();

//Creacion de un servidor HTTP
let server = http.createServer(app);

//Puerto
const port = process.env.PORT || 8080;

app.use('/', express.static(path.resolve(__dirname, '../public')));

//Comunicacion del backend
let io = socket(server);

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
    if(message.user) {
      callback({
        response: 'OK'
      });
    } else {
      callback({
        response: 'NOOO!!'
      })
    }
  });
});

server.listen(port, (err) => {
  if (err) throw new Error(err);
  console.log(`Listening to port ${port}`);
});
