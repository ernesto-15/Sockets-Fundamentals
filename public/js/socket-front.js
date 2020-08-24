const socket = io();
//Conexion del cliente
socket.on('connect', () => console.log('Connected to the server'));
//Desconexion del cliente
socket.on('disconnect', () => console.log('Connection lost'));
//Enviar informacion
// socket.emit(
//   'sendMessage',
//   {
//     user: 'Ernesto',
//     message: 'Hello World',
//   },
//   (response) => {
//     console.log('Server Response: ', response);
//   }
// );
//Escuchar informacion
socket.on('sendMessage', (message) => {
  console.log('Sever', message);
});
