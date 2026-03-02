// Capturamos todos los botones por su ID
const btnAyuda = document.getElementById('btnAyuda');
const btnCita = document.getElementById('btnCita');
const btnGestion = document.getElementById('btnGestion');
const btnPerfil = document.getElementById('btnPerfil');
const btnInformes = document.getElementById('btnInformes');

// Agregamos eventos de clic a cada uno (aquí irían los enlaces a tus otros HTMLs)
btnAyuda.addEventListener('click', () => {
    alert('Has hecho clic en Ayuda');
});

btnCita.addEventListener('click', () => {
    // Ejemplo de cómo navegar a otra página real:
    // window.location.href = "cita-rapida.html";
    alert('Ir a la página de Cita Rápida');
    window.location.href = 'D:/Users/Casa/Documents/Zahir/BlindView/Menu_principal/menu.html';
});

btnGestion.addEventListener('click', () => {
    alert('Ir a la página de Gestión de Citas');
    window.location.href = 'D:/Users/Casa/Documents/Zahir/BlindView/Gestion_citas/gestion.html';
});

btnPerfil.addEventListener('click', () => {
    alert('Ir a la página de Mi Perfil');
    window.location.href = 'D:/Users/Casa/Documents/Zahir/BlindView/Menu_principal/menu.html';
});

btnInformes.addEventListener('click', () => {
    alert('Ir a la página de Informes');
    window.location.href = 'D:/Users/Casa/Documents/Zahir/BlindView/Menu_principal/menu.html';
});