function mostrarHoraActual() {
    let contenido = document.getElementById("contenido");
    let horaActual = new Date();
    let hora = horaActual.getHours();
    let minutos = horaActual.getMinutes();
    let segundos = horaActual.getSeconds();

    //Añadir un cero delante si los minutos o segundos son menores que 10
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    //Formatear la hora en formato HH:MM:SS
    let horaFormateada = hora + ":" + minutos + ":" + segundos;

    //Actualizar el contenido del div con la hora actual
    contenido.textContent = horaFormateada;
}

//Mostrar la hora actual cada segundo
setInterval(mostrarHoraActual, 1000);

//Mostrar la hora actual al cargar la página
mostrarHoraActual();
