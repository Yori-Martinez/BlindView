// 1. Capturamos los elementos clave de la pantalla
const btnAyuda = document.getElementById('btnAyuda');
const btnGenerar = document.getElementById('btnGenerar');
const tablaBody = document.querySelector('#tablaInformes tbody');
const textoTotalUsuarios = document.getElementById('totalUsuarios');
const btnLimpiarCitas = document.getElementById('btnLimpiarCitas');
const tablaCitasBody = document.getElementById('tablaCitasBody');
const citasSeleccionadasContainer = document.getElementById('citasSeleccionadasContainer');
const sinCitasMsg = document.getElementById('sinCitasMsg');

// 2. Acción para volver al menú principal
btnAyuda.addEventListener('click', () => {
    window.location.href = 'https://www.comunidad.madrid/servicios/atencion-ciudadano';
});
// Función para cargar las citas seleccionadas
function cargarCitasSeleccionadas() {
    const citasSeleccionadas = JSON.parse(localStorage.getItem('citasSeleccionadas')) || [];
    
    if (citasSeleccionadas.length === 0) {
        citasSeleccionadasContainer.innerHTML = '';
        sinCitasMsg.style.display = 'block';
        btnLimpiarCitas.style.display = 'none';
        return;
    }
    
    // Mostramos la tabla y escondemos el mensaje
    citasSeleccionadasContainer.style.display = 'block';
    sinCitasMsg.style.display = 'none';
    btnLimpiarCitas.style.display = 'block';
    
    // Vaciamos la tabla
    tablaCitasBody.innerHTML = '';
    
    // Llenamos la tabla con las citas
    citasSeleccionadas.forEach((cita, index) => {
        const fila = document.createElement('tr');
        
        // Dividimos el texto de la cita (Día - Mes - Hora)
        const partes = cita.split(' - ');
        
        fila.innerHTML = `
            <td>${partes[0] || ''}</td>
            <td>${partes[1] || ''}</td>
            <td>${partes[2] || ''}</td>
            <td><button class="btn-eliminar-cita" onclick="eliminarCita(${index})">Eliminar</button></td>
        `;
        
        tablaCitasBody.appendChild(fila);
    });
}

// Función para eliminar una cita individual
window.eliminarCita = function(index) {
    let citasSeleccionadas = JSON.parse(localStorage.getItem('citasSeleccionadas')) || [];
    citasSeleccionadas.splice(index, 1);
    localStorage.setItem('citasSeleccionadas', JSON.stringify(citasSeleccionadas));
    localStorage.setItem('totalCitasSeleccionadas', citasSeleccionadas.length);
    
    // Actualizamos la tabla de citas y el contador
    cargarCitasSeleccionadas();
    document.getElementById('totalCitas').textContent = citasSeleccionadas.length;
};

// Botón para limpiar todas las citas
btnLimpiarCitas.addEventListener('click', () => {
    if (confirm('¿Estás seguro de que quieres eliminar todas las citas seleccionadas?')) {
        localStorage.setItem('citasSeleccionadas', JSON.stringify([]));
        localStorage.setItem('totalCitasSeleccionadas', 0);
        cargarCitasSeleccionadas();
        document.getElementById('totalCitas').textContent = '0';
    }
});// 3. DATOS DE PRUEBA (Mientras tu amigo nos hace la ruta en Node.js)
const usuariosPrueba = [
    { id: 1, nombre: "Juan Pérez", correo: "juan@gmail.com", estado: "Activo" },
    { id: 2, nombre: "María Gómez", correo: "maria@hotmail.com", estado: "Pendiente" },
    { id: 3, nombre: "Carlos Ruiz", correo: "carlos@yahoo.com", estado: "Inactivo" },
    { id: 4, nombre: "Ana López", correo: "ana@empresa.com", estado: "Activo" }
];


// 4. Función mágica que dibuja la tabla solita
function cargarTabla() {
    // Vaciamos la tabla por si acaso
    tablaBody.innerHTML = '';

    // Recorremos nuestro arreglo y creamos una fila por cada persona
    usuariosPrueba.forEach(usuario => {
        const fila = document.createElement('tr');
        
        // Armamos el HTML de la fila
        fila.innerHTML = `
            <td>#${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.correo}</td>
            <td style="color: ${usuario.estado === 'Activo' ? 'green' : 'gray'}">
                <strong>${usuario.estado}</strong>
            </td>
        `;
        
        // Metemos la fila en la tabla
        tablaBody.appendChild(fila);
    });

    // Actualizamos el número gigante de la tarjeta de arriba
    textoTotalUsuarios.textContent = usuariosPrueba.length;
    
    // Agregamos el total de citas seleccionadas desde localStorage
    const totalCitas = document.getElementById('totalCitas');
    const citasSeleccionadas = JSON.parse(localStorage.getItem('citasSeleccionadas')) || [];
    totalCitas.textContent = citasSeleccionadas.length;
}

// Ejecutamos las funciones apenas abrimos la página
cargarTabla();
cargarCitasSeleccionadas();

// 5. Botón de reporte
btnGenerar.addEventListener('click', () => {
    alert('¡Procesando reporte! (Más adelante conectaremos esto para descargar un PDF de verdad 🚀)');
});