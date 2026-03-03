// Importamos las herramientas
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();

// Configuraciones básicas
app.use(cors());
app.use(express.json()); // Para entender los datos que mandes desde el frontend
app.use(express.static('public')); // ¡Esto hace que tu diseño HTML y CSS se vea en internet!

// Configuración de la Base de Datos (Se conecta a Render usando tu .env)
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false // Necesario para que Render te deje conectarte
    }
});

// Prueba de conexión a la base de datos
pool.connect()
    .then(() => console.log('¡Conectado a la base de datos de Render con éxito, bro!'))
    .catch(err => console.error('Error al conectar a la BD:', err.stack));


// Crear la tabla de usuarios si no existe
const crearTabla = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS usuarios (
                id SERIAL PRIMARY KEY,
                nombre VARCHAR(100) NOT NULL,
                correo VARCHAR(100) UNIQUE NOT NULL,
                contrasena VARCHAR(255) NOT NULL
            );
        `);
        console.log('Tabla de usuarios lista 📁');
    } catch (error) {
        console.error('Error creando la tabla:', error);
    }
};
crearTabla();


// 1. RUTA PARA REGISTRAR UN USUARIO
app.post('/api/registro', async (req, res) => {
    try {
        const { nombre, correo, contrasena } = req.body;

        const nuevoUsuario = await pool.query(
            'INSERT INTO usuarios (nombre, correo, contrasena) VALUES ($1, $2, $3) RETURNING *',
            [nombre, correo, contrasena]
        );

        res.json({ mensaje: '¡Usuario registrado!', usuario: nuevoUsuario.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hubo un error al registrar' });
    }
});

// 2. RUTA PARA INICIAR SESIÓN (LOGIN)
app.post('/api/login', async (req, res) => {
    try {
        const { correo, contrasena } = req.body;

        // Buscamos en la base de datos a alguien con ese correo y contraseña exactos
        const resultado = await pool.query(
            'SELECT * FROM usuarios WHERE correo = $1 AND contrasena = $2',
            [correo, contrasena]
        );

        // Si el resultado tiene al menos 1 fila, es que los datos son correctos
        if (resultado.rows.length > 0) {
            res.json({ mensaje: '¡Login exitoso!', exito: true });
        } else {
            // Si no encuentra nada, los datos están mal
            res.status(401).json({ error: 'Correo o contraseña incorrectos', exito: false });
        }
    } catch (error) {
        console.error('Error en el login:', error);
        res.status(500).json({ error: 'Hubo un error al intentar iniciar sesión' });
    }
});

// 3. Encendemos el servidor (¡ESTO SIEMPRE VA AL FINAL!)
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor corriendo en el puerto: ${PORT} 🚀`);
});