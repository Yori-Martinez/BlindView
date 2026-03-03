const btnAyuda = document.getElementById('btnAyuda');
const registroForm = document.getElementById('registroForm');

btnAyuda.addEventListener('click', () => {
    alert('Sección de ayuda para el registro.');
});

registroForm.addEventListener('submit', (evento) => {
    // Evita que la página recargue
    evento.preventDefault();
    
    // Capturamos los datos
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    
    // Simulamos un registro exitoso
    alert(`¡Genial, ${nombre}! Tu cuenta con el correo ${correo} ha sido registrada (Simulación). Te llevaremos al inicio de sesión.`);
    
    // Redirigimos al Login
    window.location.href = 'index.html';
});