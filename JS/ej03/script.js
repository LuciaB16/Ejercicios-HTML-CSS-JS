function mostrarHoraActual() {
    var contenido = document.getElementById("contenido");
    var horaActual = new Date();
    var hora = horaActual.getHours();
    var minutos = horaActual.getMinutes();
    var segundos = horaActual.getSeconds();

    //Añadir un cero delante si los minutos o segundos son menores que 10
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    //Formatear la hora en formato HH:MM:SS
    var horaFormateada = hora + ":" + minutos + ":" + segundos;

    //Actualizar el contenido del div con la hora actual
    contenido.textContent = horaFormateada;
}

//Mostrar la hora actual cada segundo
setInterval(mostrarHoraActual, 1000);

//Mostrar la hora actual al cargar la página
mostrarHoraActual();
