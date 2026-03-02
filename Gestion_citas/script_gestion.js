// Capturamos los nuevos botones
const btnAyuda = document.getElementById('btnAyuda');
const btnHospital = document.getElementById('btnHospital');
const btnMedico = document.getElementById('btnMedico');
const btnDentista = document.getElementById('btnDentista');
const btnGestion = document.getElementById('btnGestion');

// Agregamos los eventos
btnAyuda.addEventListener('click', () => {
    window.location.href = 'https://www.comunidad.madrid/servicios/atencion-ciudadano';
});

btnHospital.addEventListener('click', () => {
    window.location.href = '../Horarios/horario.html';
});

btnMedico.addEventListener('click', () => {
    window.location.href = '../Horarios/horario.html';
});

btnDentista.addEventListener('click', () => {
    window.location.href = '../Horarios/horario.html';
});

btnGestion.addEventListener('click', () => {
    window.location.href = '../Gestion_citas/gestion.html';
});