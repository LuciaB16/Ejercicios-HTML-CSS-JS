//Lista de colores predefinida
let colores = ["red", "green", "blue", "yellow", "orange"];
let indiceColor = 0;

//Cambiar el color de fondo cada segundo
setInterval(cambiarColorFondo, 1000);

//Función para cambiar el color de fondo cada segundo
function cambiarColorFondo() {
    let contenido = document.getElementById("contenido");
    contenido.style.backgroundColor = colores[indiceColor];
    indiceColor++;
    if (indiceColor >= colores.length) {
        indiceColor = 0;
    }
}
