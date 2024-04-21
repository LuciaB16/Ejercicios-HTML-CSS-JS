document.addEventListener('DOMContentLoaded', function() {
    const enlacesImagenes = [
        'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/08/01/playa-de-figueiras-islas-cies.jpeg',
        'https://ethic.es/wp-content/uploads/2021/06/restaurar-5-rec-2-rec-def.jpg',
        'https://www.aranzadi.eus/assets/img/pages/flores-bonitas-230509131129.jpg',
        'https://imagenes.20minutos.es/files/image_640_360/files/fp/uploads/imagenes/2022/07/21/conejos-enanos.r_d.960-642.jpeg',
        'https://s1.significados.com/foto/leon-animal-salvaje-ok.jpg?class=article'
    ];

    const botonAnadir = document.getElementById('botonAnadir');
    const botonEliminar = document.getElementById('botonEliminar');
    const inputPosicion = document.getElementById('posicion');
    const contenedor = document.getElementById('contenedor-imagenes');
    
    botonAnadir.addEventListener('click', añadirImagen);
    botonEliminar.addEventListener('click', eliminarImagen);

    function añadirImagen() {
        const numImagenes = contenedor.children.length;

        if (numImagenes < 5) {
            const nuevaImagen = document.createElement('img');
            nuevaImagen.src = enlacesImagenes[numImagenes];
            contenedor.appendChild(nuevaImagen);
        } else {
            alert('No se pueden añadir más de 5 imágenes');
        }
    }

    function eliminarImagen() {
        const posicion = parseInt(inputPosicion.value);
        const cantidadImagenes = contenedor.children.length;

        if (isNaN(posicion) || posicion < 1 || posicion > cantidadImagenes) {
            alert('Introduce una posición válida');
            return;
        }

        contenedor.removeChild(contenedor.children[posicion - 1]);
    }
});
