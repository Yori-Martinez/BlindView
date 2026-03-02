// 1. Capturamos los elementos del HTML usando los 'id' que les pusimos
const btnAyuda = document.getElementById('btnAyuda');
const loginForm = document.getElementById('loginForm');

// 2. Le damos interactividad al botón de ayuda
btnAyuda.addEventListener('click', () => {
    alert('Has hecho clic en Ayuda. Aquí podrías abrir un modal o redirigir a otra página.');
});

// 3. Simulamos lo que pasa al enviar el formulario y redirigimos
loginForm.addEventListener('submit', (evento) => {
    // Evitamos que la página se recargue automáticamente
    evento.preventDefault();
    
    // Aquí le decimos al navegador que nos lleve al HTML del menú
    window.location.href = 'D:/Users/Casa/Documents/Zahir/BlindView/Menu_principal/menu.html';
    
    // Capturamos lo que el usuario escribió en el correo
    const correoIngresado = document.getElementById('correo').value;
    
    // Mostramos un mensaje en la consola del navegador (F12)
    console.log(`Intentando iniciar sesión con el correo: ${correoIngresado}`);
    alert(`Intentando ingresar con: ${correoIngresado}`);
});