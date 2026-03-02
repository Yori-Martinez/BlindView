// 1. Capturamos los elementos del HTML usando los 'id' que les pusimos
const btnAyuda = document.getElementById('btnAyuda');
const loginForm = document.getElementById('loginForm');

// 2. Le damos interactividad al botón de ayuda
btnAyuda.addEventListener('click', () => {
    window.location.href = 'https://www.comunidad.madrid/servicios/atencion-ciudadano';
});


// 3. Simulamos lo que pasa al enviar el formulario y redirigimos
loginForm.addEventListener('submit', (evento) => {
    // Evitamos que la página se recargue automáticamente
    evento.preventDefault();
    
    // Aquí le decimos al navegador que nos lleve al HTML del menú
    window.location.href = '../Menu_principal/menu.html';
    
    // Capturamos lo que el usuario escribió en el correo
    const correoIngresado = document.getElementById('correo').value;
    
    // Mostramos un mensaje en la consola del navegador (F12)
    console.log(`Intentando iniciar sesión con el correo: ${correoIngresado}`);
    alert(`Intentando ingresar con: ${correoIngresado}`);
});