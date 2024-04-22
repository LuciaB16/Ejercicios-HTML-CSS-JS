document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formulario');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        console.log('DATOS DEL FORMULARIO:');
        //Obtener datos del formulario
        const datosFormulario = new FormData(form);
        
        for (let [key, value] of datosFormulario.entries()) {
            console.log(`${key}: ${value}`);
        }

        const formObject = Object.fromEntries(datosFormulario.entries());
        console.log('Objeto con clave-valor:', formObject);

        const keyUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const lastId = keyUsuarios.length > 0 ? Math.max(...keyUsuarios.map(u => u.id)) : 0;
        const nuevoUsuario = { id: lastId + 1, ...formObject };
        delete nuevoUsuario.foto_perfil;
        delete nuevoUsuario.cv;
        keyUsuarios.push(nuevoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(keyUsuarios));

        console.log('El usuario: ', nuevoUsuario, 'ha sido añadido a la colección de usuarios');

        form.reset();
    });
});
