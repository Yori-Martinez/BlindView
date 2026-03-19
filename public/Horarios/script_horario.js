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

// Función para generar fechas reales
function generarHorariosReales() {
    const horas = ['09:00', '10:30', '14:00', '15:30', '17:00', '18:45'];
    const horarios1 = [];
    const horarios2 = [];
    
    // Obtenemos la fecha de hoy
    let fecha = new Date();
    
    // Saltamos al próximo día si hoy es domingo
    if (fecha.getDay() === 0) fecha.setDate(fecha.getDate() + 1);
    
    const meses = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 
                   'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];
    const dias = ['DOMINGO', 'LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO'];
    
    // Generamos 8 citas (4 por página)
    let contador = 0;
    while (contador < 8) {
        // Saltamos domingos y generamos solo de lunes a viernes
        if (fecha.getDay() !== 0) {
            const nombreDia = dias[fecha.getDay()];
            const numDia = fecha.getDate().toString().padStart(2, '0');
            const nombreMes = meses[fecha.getMonth()];
            const hora = horas[Math.floor(Math.random() * horas.length)];
            
            const horarioHTML = `
                <button class="fila-horario">
                    <span>${nombreDia} ${numDia}</span><span>${nombreMes}</span><span>${hora}</span>
                </button>
            `;
            
            if (contador < 4) {
                horarios1.push(horarioHTML);
            } else {
                horarios2.push(horarioHTML);
            }
            
            contador++;
        }
        
        fecha.setDate(fecha.getDate() + 1);
    }
    
    // Insertamos los horarios en el HTML
    document.getElementById('pagina-1').innerHTML = horarios1.join('');
    document.getElementById('pagina-2').innerHTML = horarios2.join('');
    
    // RE-asignamos los listeners a los nuevos botones
    const filasHorariosActualizadas = document.querySelectorAll('.fila-horario');
    filasHorariosActualizadas.forEach(fila => {
        fila.addEventListener('click', () => {
            const textoCita = fila.innerText.replace(/\n/g, ' - ');
            
            let citasSeleccionadas = JSON.parse(localStorage.getItem('citasSeleccionadas')) || [];
            citasSeleccionadas.push(textoCita);
            localStorage.setItem('citasSeleccionadas', JSON.stringify(citasSeleccionadas));
            localStorage.setItem('totalCitasSeleccionadas', citasSeleccionadas.length);
            
            alert(`¡Has seleccionado la cita: ${textoCita}!\nTotal de citas seleccionadas: ${citasSeleccionadas.length}`);
        });
    });
}

// Ejecutamos al cargar la página
generarHorariosReales();

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
