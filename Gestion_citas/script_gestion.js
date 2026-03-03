// Capturamos los nuevos botones
const btnAyuda = document.getElementById('btnAyuda');
const btnDentista = document.getElementById('btnDentista');
const btnMedico = document.getElementById('btnMedico');
const btnVolver = document.getElementById('btnVolver');
const btnGestion = document.getElementById('btnGestion');

// Agregamos los eventos
btnAyuda.addEventListener('click', () => {
    window.location.href = 'https://www.comunidad.madrid/servicios/atencion-ciudadano';
});

btnDentista.addEventListener('click', () => {
    window.location.href = '../Horarios/horario.html';
});

btnMedico.addEventListener('click', () => {
    window.location.href = '../Horarios/horario.html';
});

btnVolver.addEventListener('click', () => {
    window.location.href = '../Menu_principal/menu.html';
});

btnGestion.addEventListener('click', () => {
    window.location.href = '../Gestion_citas/gestion.html';
});