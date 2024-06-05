// Creamos un numero al azar
let numeroAzar = Math.floor(Math.random()*100) + 1;

let numeroEntrada = document.getElementById('numeroEntrada');
console.log(numeroEntrada);
let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intentos');
let intentos = 0;

let boton = document.getElementById('boton');

boton.addEventListener('click', () => chequearResultado());

// Funcion que se ejecuta cuando se toque al boton chequear.

function chequearResultado() {
    intentos++;
    intento.textContent = `Su numero de intentos es ${intentos}`;
    intento.style.fontSize = '16px';
    
    let numeroIngresado = parseInt(numeroEntrada.value);
    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Introducir un numero entre 0 y 100';
        mensaje.style.color = '#f00';
        return;
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = 'Felicidades has adivinado el numero';
        mensaje.style.color = '#0a0';
        numeroEntrada.disable = 'true';
    }
    else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = 'MAS ARRIBA!! El numero que ingresaste es MENOR';
        mensaje.style.color = '#fff';
    } else {
        mensaje.textContent = 'MAS ABAJO!! El numero que ingresaste es MAYOR';
        mensaje.style.color = '#fff';
    }
}
