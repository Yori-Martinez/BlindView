# BlindView

**Plantilla web orientada a facilitar el acceso a páginas a personas con discapacidad visual.**

Proyecto realizado por **Zahir Yori Martínez Carrasco y Adrián Abad**. Su propósito es ofrecer una base de interfaz reutilizable que pueda adaptarse a diferentes contenidos y servicios web.

El prototipo utiliza un flujo de gestión de citas como ejemplo de aplicación de la plantilla. Las pantallas de citas forman parte de ese ejemplo; el objetivo principal del proyecto es la accesibilidad de la interfaz.

## Qué encontrarás

- Pantallas de registro e inicio de sesión.
- Menú principal y perfil.
- Ejemplo de selección y consulta de citas.
- Pantalla de informes.
- Un servidor de demostración para registro y comprobación de credenciales.

## Tecnologías

| Parte | Tecnologías |
| --- | --- |
| Interfaz | HTML, CSS y JavaScript |
| Servidor | Node.js y Express |
| Base de datos | PostgreSQL |
| Configuración | dotenv y variables de entorno |

Las citas seleccionadas se almacenan en el navegador mediante `localStorage`. PostgreSQL se utiliza para los usuarios del ejemplo de backend.

## Estructura

```text
public/
  index.html          # Entrada e inicio de sesión
  registro.html       # Formulario de registro
  Menu_principal/     # Navegación principal
  Perfil/             # Pantalla de perfil
  Horarios/           # Horarios de demostración y selección
  Gestion_citas/      # Consulta de citas
  Informes/           # Pantalla de informes
server.js             # Servidor Express y conexión PostgreSQL
package.json          # Dependencias y comando de inicio
```

## Ejecutar el prototipo

1. Instala Node.js y npm compatibles con las dependencias del proyecto.
2. Clona el repositorio e instala sus dependencias:

```bash
git clone https://github.com/Yori-Martinez/BlindView.git
cd BlindView
npm ci
```

3. Configura una base PostgreSQL de pruebas y crea un archivo `.env` local con tus propios valores:

```dotenv
DATABASE_URL=postgresql://USUARIO:CONTRASENA@HOST:PUERTO/BASE_DE_DATOS
PORT=3000
```

El servidor actual utiliza una conexión SSL. Configura la conexión según tu entorno de pruebas; no publiques credenciales. Al arrancar intenta crear la tabla `usuarios` si no existe.

4. Inicia el servidor:

```bash
npm start
```

5. Abre `http://localhost:3000`.

## Estado y alcance

Este repositorio contiene un **prototipo educativo**:

- Los horarios se generan como datos de demostración.
- Las citas se conservan en el navegador; no existe todavía una agenda central de reservas en el servidor.
- La generación de informes PDF está pendiente.
- El objetivo de accesibilidad necesita contrastarse mediante pruebas de teclado, lectores de pantalla y revisión del contraste y la estructura del contenido. No se declara una certificación de accesibilidad.
- El backend de autenticación necesita mejoras antes de utilizarse con usuarios reales: hash de contraseñas, sesiones, autorización y exclusión de datos sensibles en las respuestas. Usa únicamente datos y contraseñas ficticios en las demostraciones.
- El comando `npm test` todavía es un marcador y no ejecuta una suite de pruebas.

## Autores

- **Zahir Yori Martínez Carrasco** · [GitHub](https://github.com/Yori-Martinez)
- **Adrián Abad**

## Repositorio

[Yori-Martinez/BlindView](https://github.com/Yori-Martinez/BlindView)
