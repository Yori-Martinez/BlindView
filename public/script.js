// 1. Capturamos los elementos del HTML usando los 'id' que les pusimos
const btnAyuda = document.getElementById('btnAyuda');
const loginForm = document.getElementById('loginForm');
const btnIrRegistro = document.getElementById('btnIrRegistro');

// 2. Le damos interactividad al botón de ayuda
btnAyuda.addEventListener('click', () => {
    window.location.href = 'https://www.comunidad.madrid/servicios/atencion-ciudadano';
});

// Le agregamos la acción del clic al botón de registrarse
btnIrRegistro.addEventListener('click', () => {
    // Te lleva a la página de registro
    window.location.href = 'registro.html';
});

// 3. ¡NUEVO! Conectamos el inicio de sesión real con el Backend
loginForm.addEventListener('submit', async (evento) => {
    // Evitamos que la página se recargue automáticamente
    evento.preventDefault();
    
    // Capturamos lo que el usuario escribió
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value; 
    // (Nota: Asegúrate de que tu input de contraseña en el index.html tenga id="contrasena")
    
    console.log(`Verificando credenciales para: ${correo}...`);

    try {
        // Le mandamos el correo y la contraseña al servidor para que revise la Base de Datos
        const respuesta = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ correo, contrasena })
        });

        // Esperamos la respuesta del servidor
        const datos = await respuesta.json();

        // Si el servidor dice que todo está bien (exito: true)
        if (respuesta.ok && datos.exito) {
            // ¡El usuario existe y la contraseña es correcta! Lo dejamos pasar.
            window.location.href = './Menu_principal/menu.html';
        } else {
            // Si el servidor dice que los datos están mal, le avisamos al usuario y NO lo dejamos pasar
            alert('Acceso denegado: ' + datos.error);
        }
    } catch (error) {
        console.error('Error de conexión:', error);
        alert('Uy, no pudimos conectar con el servidor. Revisa tu conexión.');
    }
});