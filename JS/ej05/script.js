let alarma = null;
let cuentaAtras = 0;
let tiempo = 0;

function iniciarAlarma() {
    let inputSegundos = document.getElementById('segundos');
    if (cuentaAtras === 0) {
        cuentaAtras = parseInt(inputSegundos.value);
        if (isNaN(cuentaAtras)) {
            alert('Escribe una cantidad correcta de segundos');
            return;
        }
    }

    if (alarma) {
        clearInterval(alarma);
    }

    alarma = setInterval(() => {
        tiempo += 1;
        cuentaAtras -= 1;
        document.getElementById('contador').textContent = cuentaAtras;
        if (cuentaAtras <= 0) {
            clearInterval(alarma);
            document.getElementById('mensaje').style.display = 'block';
        }
    }, 1000);

    inputSegundos.disabled = true;
    document.getElementById('btnIniciar').disabled = true;
    document.getElementById('btnPosponer').disabled = false;
    document.getElementById('btnDetener').disabled = false;
}

function posponerAlarma() {
    clearInterval(alarma);
    cuentaAtras += 5; // Posponer la alarma por 5 segundos
    document.getElementById('contador').textContent = cuentaAtras;
    alarma = setInterval(() => {
        tiempo += 1;
        cuentaAtras -= 1;
        document.getElementById('contador').textContent = cuentaAtras;
        if (cuentaAtras <= 0) {
            clearInterval(alarma);
            document.getElementById('mensaje').style.display = 'block';
        }
    }, 1000);
}

function detenerAlarma() {
    clearInterval(alarma);
    document.getElementById('mensaje').style.display = 'none';
    document.getElementById('segundos').disabled = false;
    document.getElementById('btnIniciar').disabled = false;
    document.getElementById('btnPosponer').disabled = true;
    document.getElementById('btnDetener').disabled = true;
}


