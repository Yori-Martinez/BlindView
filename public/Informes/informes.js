// 1. Capturamos los elementos clave de la pantalla
const btnVolver = document.getElementById('btnVolver');
const btnGenerar = document.getElementById('btnGenerar');
const tablaBody = document.querySelector('#tablaInformes tbody');
const textoTotalUsuarios = document.getElementById('totalUsuarios');

// 2. Acción para volver al menú principal
btnVolver.addEventListener('click', () => {
    // Te regresa a la página del menú (ajusta la ruta si tu HTML del menú se llama diferente)
    window.location.href = './Menu_principal/menu.html';
});

// 3. DATOS DE PRUEBA (Mientras tu amigo nos hace la ruta en Node.js)
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
}

// Ejecutamos la función apenas abrimos la página
cargarTabla();

// 5. Botón de reporte
btnGenerar.addEventListener('click', () => {
    alert('¡Procesando reporte! (Más adelante conectaremos esto para descargar un PDF de verdad 🚀)');
});