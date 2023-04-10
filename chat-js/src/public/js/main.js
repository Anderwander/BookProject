//ESTE ES EL LADO DEL CLIENTE//
//Comprobamos que hay un usuario nuevo conectado, accediendo desde html a main.js con un script//
//Podemos comprobar que el módulo de conectión de sockets.js funciona correctamente y nos muestra el nuevo usuario conectado/
//Para acceder a los elementos de HTML vamos a utilizar jquery con los id que hemos puesto y manejar los elementos de DOM//
//En HTML conectamos la librería jquery de JS, comunicación ajax para recibir y enviar información//
$(function () {
    const socket = io();
    var nick = '';
//Accedemos a los elementos del DOM con jquery (formulario, mensaje y chat)
    const messageForm = $('#messages-form');
    const messageBox = $('#message');
    const chat = $('#chat');
//Acceder al formulario a través de todos sus id//
    const nickForm = $('#nick-form');
    const nickError = $('#nick-error');
    const nickName = $('#nick-name');
    const userNames = $('#usernames');

//Generamos los eventos con prevent default (botón envío, emisión del mensaje que se almacena en messageBox)//
//Enviamos un mensaje al servidor y lo recogemos en socket.js//
    messageForm.submit (e => {
        e.preventDefault(); //evitar que se actualice y se recargue la pantalla//
        socket.emit('enviar mensaje', messageBox.val());
        messageBox.val('');
    });
//Obtenemos la respuesta del servidor, con un callback con los datos, mb es el margin button desde  bootstrap//
    socket.on ('nuevo mensaje', function(datos){ //aqui hasta el lado cliente, solo se ve en consola//
        let color ="#f4f4f4#"//en chat.append incluimos el style del fondo del mismo color//
        if(nick == datos.username){
           color = "#9ff4c5"
        } 
        chat.append(`<div class="msg-area mb-2 d-flex"style="background-color:${color}"><b>${datos.username} :</b><p class="msg">${datos.msg}</p></div>`);//para visualizar en el chat//
    });//d-flex de bootstrap, para poner el nombre y a continuación el mensaje//
//Creamos el evento para enviar el nombre del nuevo usuario logeado y ponemos la condición para no duplicar el usuario si existe//
//Si el usuario no existe, se esconde en main.css la casilla que introduce usuario y si existe, se muestra el error//   
    nickForm.submit(e => {
        e.preventDefault();
        socket.emit('nuevo usuario', nickName.val(), datos =>{
            if(datos){
                nick = nickName.val();
                $('#nick-wrap').hide();// función de jquery para esconder la casilla que introduce al usuario//
                $('#content-wrap').show();// función de jquery para mostrar la casilla de contenido del chat//
            }
            else{
                nickError.html('<div class="alert alert-danger">El usuario ya existe</div>');
            }
            nickName.val(''); //para que se vacie en caso de error

        });

    });
//Creamos un evento para obtener el array de usuarios conectados mediante un for para que nos recorra el array//
        socket.on('nombre usuario', datos => {
    
            let html= '';
            let color= '';//para que nos muestre cada usuario con un color//
            let salir= '';//para poder salir del chat//

            for(let i = 0; i < datos.length; i++){
                if(nick == datos[i]){
                color = "#027f43";
                salir ='<a class="enlace-salir" href="/">Salir</a>';
                }else{
                    color = "#000";//si no eres tu el usuario//
                    salir = '';
                }
                html += `<p style ="color: ${color}">${datos[i]} ${salir}</p>`;//Pintamos este contenido dentro de la ventana//
            }
            userNames.html(html);//modificamos el contenido de la ventana//
        
        });
    })

        
    
        
    