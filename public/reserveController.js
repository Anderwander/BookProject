// Obtenemos todos los botones con la clase .btn-reservado
const btnsReservados = document.querySelectorAll(".btn-reservado");
// Sobre todos los botones, agrega a cada uno el evento de click
btnsReservados.forEach((btnReservado) => {
  btnReservado.addEventListener("click", function () {
    // Cambia el color de fondo del botón a rojo cuando se hace click
    btnReservado.style.backgroundColor = "red";
    // Cambia el texto del botón a "Reservado" cuando se hace click
    btnReservado.value = "Reservado";
    btnReservado.classList.add("clicked");
  });
});
/*btnReservar.classList.add('btn-reservado');
  //Agregamos el evento de clic nuevamente en el botón para que cambie a azul y Reservar
  btnReservar.addEventListener('click', function() {
    // Cambiamos el color del botón a azul
    btnReservar.style.backgroundColor = '#146C94';
    // Cambiamos el texto del botón a "Reservar"
    btnReservar.value = 'Reservar';
    // Cambiamos el estado del botón
    btnReservar.classList.remove('btn-reservado');
  });*/
