const btnAyuda = document.getElementById('btnAyuda');
const registroForm = document.getElementById('registroForm');

registroForm.addEventListener('submit', async (evento) => {
    evento.preventDefault(); // Evita que la página recargue
    
    // Capturamos lo que el usuario escribió
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    
    try {
        // Enviamos los datos al backend usando "fetch"
        const respuesta = await fetch('/api/registro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, correo, contrasena })
        });

        const datos = await respuesta.json();

        if (respuesta.ok) {
            // Guardamos el nombre del usuario en localStorage
            localStorage.setItem('usuarioNombre', nombre);
            localStorage.setItem('usuarioCorreo', correo);
            alert('¡Registro real exitoso! Revisa la base de datos o inicia sesión.');
            window.location.href = 'index.html'; // Te manda al login
        } else {
            alert('Error: ' + datos.error);
        }
    } catch (error) {
        console.error('Error de conexión:', error);
        alert('No se pudo conectar con el servidor.');
    }
});