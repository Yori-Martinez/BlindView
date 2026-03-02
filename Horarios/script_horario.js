// Capturamos los elementos
const btnAyuda = document.getElementById('btnAyuda');
const pagina1 = document.getElementById('pagina-1');
const pagina2 = document.getElementById('pagina-2');
const btnNavegar = document.getElementById('btnNavegar');
const filasHorarios = document.querySelectorAll('.fila-horario'); // Selecciona todos los botones blancos

// Variable para saber en qué página estamos
let paginaActual = 1;



btnAyuda.addEventListener('click', () => {
    window.location.href = 'https://www.comunidad.madrid/servicios/atencion-ciudadano';
});



// Lógica de la flecha
btnNavegar.addEventListener('click', () => {
    if (paginaActual === 1) {
        // Ocultar pag 1, mostrar pag 2
        pagina1.classList.add('oculto');
        pagina2.classList.remove('oculto');
        
        // Cambiar la flecha para que apunte a la izquierda (código HTML para flecha izq)
        btnNavegar.innerHTML = '&#9664;'; 
        paginaActual = 2;
    } else {
        // Ocultar pag 2, mostrar pag 1
        pagina2.classList.add('oculto');
        pagina1.classList.remove('oculto');
        
        // Cambiar la flecha para que apunte a la derecha
        btnNavegar.innerHTML = '&#9654;'; 
        paginaActual = 1;
    }
});

// Le damos una alerta a cada fila blanca para simular que eliges una cita
filasHorarios.forEach(fila => {
    fila.addEventListener('click', () => {
        // Extraemos el texto de la cita para mostrarlo
        const textoCita = fila.innerText.replace(/\n/g, ' - ');
        alert(`¡Has seleccionado la cita: ${textoCita}!`);
    });
});