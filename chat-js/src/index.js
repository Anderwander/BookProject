//Dependencia express para lanzar el servidor en el puerto 3000//
const express = require('express');
//Dependencia para unir los directorios de node.js//
const path = require('path');
//Aplicación para ver que funciona correctamente el servidor a través del puerto 3000//
const app = express();
//Vinculamos socket.io al servidor a través del puerto 3000//
const server = require('http').Server(app);
const socketio = require('socket.io')(server);
//Generalizamos el puerto y por defecto si no se especifica el puerto, ponemos 3000//
app.set('port', process.env.PORT || 3000);
//Creamos la conexión a socket.io, ejecutamos la función del archivo socket//
require('./sockets')(socketio);
//Archivos estáticos: función use a través de app, para buscar en que directorio se encuentra el archivo de la vista principal//
app.use(express.static(path.join(__dirname, 'public')));
//para comprobar que el servidor funciona correctamente, con la función get obtenemos el puerto//
server.listen(app.get('port'), () => {
    console.log('Server is running on port', app.get('port'));
});