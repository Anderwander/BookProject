//Creamos un modulo de socket.io para todas las funcionalidades del servidor con el cliente, la lógica de las funciones las haremos en js//
//función para ver que un usuario esta conectado con el servidor//
//En index.js le pasamos la conexión con un require//
//En html necesitamos acceder al js de socket.io, así que ponemos el script//
module.exports = (io) => {
    let nickNames = []; //creamos un array vacio para guardar los nombres de los usuarios//

    io.on('connection', socket => {
        console.log('Nuevo usuario conectado');
//Al recibir el mensaje del usuario, recogemos sus datos: username y mensaje//
        socket.on('enviar mensaje', (datos) => {
            console.log(datos);
            io.sockets.emit('nuevo mensaje', { 
                msg:datos, //para que reciban todos los usuarios los datos del chat//
                username:socket.nickname,//para que nos devuleva el nombre del usuario//
            });   
        });
//Vamos a crear el nuevo usuario, a través del callback vamos a poder acceder a los datos para ver si el usuario es correcto//
//El callback llama al array de los nombres de usuarios y devuelve true si el usuario es correcto y lo almacena y si no es correcto, devuelve false//
    socket.on('nuevo usuario', (datos, callback) =>{
        if(nickNames.indexOf(datos) != -1){
            callback(false);
        }else{
            callback(true);//para que pueda acceder al array//
            socket.nickname = datos;
            nickNames.push(socket.nickname);//nombre del array y función push//
//Enviamos el array para que lo visualicen el resto de usuarios y vean quienes están conectados//  
            io.sockets.emit('nombre usuario', nickNames);
        }
    }); 
    socket.on('disconnect', datos =>{
        if(!socket.nickname){
            return;
        }else{
            nickNames.splice(nickNames.indexOf(socket.nickname), 1);
            io.sockets.emit('nombre usuario', nickNames);
        }
        
    });        
});

}
        
    


