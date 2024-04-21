function mostrarHoraActual() {
    let ahora = new Date();
    let hora = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();
    
    let minutosFormateados = minutos < 10 ? "0" + minutos : minutos;
    let segundosFormateados = segundos < 10 ? "0" + segundos : segundos;

    let horaFormateada = `${hora}:${minutosFormateados}:${segundosFormateados}`;

    
    let elementosNow = document.querySelectorAll('.now');

    elementosNow.forEach(elemento => {
        elemento.textContent = horaFormateada;
    });
}

setInterval(mostrarHoraActual, 1000);

mostrarHoraActual();
