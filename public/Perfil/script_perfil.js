const btnAyuda = document.getElementById('btnAyuda');

btnAyuda.addEventListener('click', () => {
    window.location.href = 'https://www.comunidad.madrid/servicios/atencion-ciudadano';
});
// Cargar el nombre del usuario desde localStorage
function cargarDatosUsuario() {
    const usuarioNombre = localStorage.getItem('usuarioNombre');
    
    if (usuarioNombre) {
        document.getElementById('usuarioNombre').textContent = usuarioNombre;
    }
}

// Ejecutar al cargar la página
cargarDatosUsuario();