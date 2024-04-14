//Lista de colores predefinida
var colores = ["red", "green", "blue", "yellow", "orange"];
var indiceColor = 0;

//Cambiar el color de fondo cada segundo
setInterval(cambiarColorFondo, 1000);

//Función para cambiar el color de fondo cada segundo
function cambiarColorFondo() {
    var contenido = document.getElementById("contenido");
    contenido.style.backgroundColor = colores[indiceColor];
    indiceColor++;
    if (indiceColor >= colores.length) {
        indiceColor = 0;
    }
}
