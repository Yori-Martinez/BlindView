// Capturamos todos los botones por su ID
const btnAyuda = document.getElementById('btnAyuda');
const btnCerrar = document.getElementById('btnCerrar');
const btnGestion = document.getElementById('btnGestion');
const btnPerfil = document.getElementById('btnPerfil');
const btnInformes = document.getElementById('btnInformes');

// Agregamos eventos de clic a cada uno (aquí irían los enlaces a tus otros HTMLs)
btnAyuda.addEventListener('click', () => {
    window.location.href = 'https://www.comunidad.madrid/servicios/atencion-ciudadano';
});

btnCerrar.addEventListener('click', () => {
    // Ejemplo de cómo navegar a otra página real:
    // window.location.href = "cita-rapida.html";
    window.location.href = '/index.html';
});

btnGestion.addEventListener('click', () => {
    window.location.href = '../Gestion_citas/gestion.html';
});

btnPerfil.addEventListener('click', () => {
    window.location.href = '../Perfil/perfil.html';
});

btnInformes.addEventListener('click', () => {
    window.location.href = 'informes.html';
});