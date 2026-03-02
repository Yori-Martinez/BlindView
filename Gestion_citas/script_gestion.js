// Capturamos los nuevos botones
const btnAyuda = document.getElementById('btnAyuda');
const btnHospital = document.getElementById('btnHospital');
const btnMedico = document.getElementById('btnMedico');
const btnDentista = document.getElementById('btnDentista');
const btnGestion = document.getElementById('btnGestion');

// Agregamos los eventos
btnAyuda.addEventListener('click', () => {
    alert('Sección de ayuda');
});

btnHospital.addEventListener('click', () => {
    alert('Redirigiendo a Atención en Hospital...');
    // Aquí pondrías: window.location.href = 'hospital.html';
});

btnMedico.addEventListener('click', () => {
    alert('Redirigiendo a Médico de Familia...');
    // window.location.href = 'medico.html';
});

btnDentista.addEventListener('click', () => {
    alert('Redirigiendo a Dentista...');
    // window.location.href = 'dentista.html';
});

btnGestion.addEventListener('click', () => {
    alert('Redirigiendo a Gestión de Citas...');
    // window.location.href = 'gestion-citas.html';
});