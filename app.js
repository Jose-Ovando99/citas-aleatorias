let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

function enteroAleatorio(min, max) {
    // No incluye el max
    return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita () {
    // el 0 es para primer elemento y usamos el length ya que nunca obtenemos max
    let indiceAleatorio = enteroAleatorio(0, citas.length);
    citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
    autorElem.innerText = `"${citas[indiceAleatorio].autor}"`; 
}

botonElem.addEventListener('click', cambiarCita);