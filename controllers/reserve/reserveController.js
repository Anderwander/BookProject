
// Botones rojo/vede Reservado/Disponible
const botones = document.querySelectorAll('.disponible');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    if (boton.classList.contains('reservado')) {
      boton.classList.remove('reservado');
      boton.innerText = 'Disponible';
    } else {
      boton.classList.add('reservado');
      boton.innerText = 'Reservado';
    }
  });
});
//Función del contador descendente 30 días
const botonReservar = document.getElementById('reservar');
const contador = document.getElementById('contador');
const tiempoReserva = 30;

function actualizarContador() {
  const ahora = new Date().getTime();
  const fechaLimite = ahora + tiempoReserva * 24 * 60 * 60 * 1000;

  const intervalo = setInterval(function() {
    const tiempoRestante = fechaLimite - new Date().getTime();

    const diasRestantes = Math.floor(tiempoRestante / (24 * 60 * 60 * 1000));
    contador.innerText = `Libre en ${diasRestantes} días`;

    if (tiempoRestante < 0) {
      clearInterval(intervalo);
      contador.innerText = 'Libre';
    }
  }, 1000);
}
let reservado = false;
let fechaLimite;

botonReservar.addEventListener('click', function() {
  reservado = !reservado;
  botonReservar.classList.toggle('reservado');
  botonReservar.innerText = reservado ? 'Reservado' : 'Reservar';

  if (reservado) {
    fechaLimite = new Date().getTime() + tiempoReserva * 24 * 60 * 60 * 1000;
    actualizarContador();
  } else {
    contador.innerText = `Libre en ${diasRestantes} días`;
  }
});

function actualizarContador() {
  const intervalo = setInterval(function() {
    const tiempoRestante = fechaLimite - new Date().getTime();

    const diasRestantes = Math.max(0, Math.floor(tiempoRestante / (24 * 60 * 60 * 1000)));
    contador.innerText = `Libre en ${diasRestantes} días`;

    if (diasRestantes === 0) {
      clearInterval(intervalo);
      contador.innerText = 'Libre';
    }
  }, 1000);
}
