//agrega a la pantalla el valor del boton de la calculadora que se aprete.
function agregar(valor) {
    document.getElementById('pantalla').value += valor;
}

//vacia la pantalla.
function borrar() {
    document.getElementById('pantalla').value = '';
}

//toma el valor de la pantalla y ejecuta los calculos,
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}