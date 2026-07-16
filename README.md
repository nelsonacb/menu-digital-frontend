# Menu Digital Chilao

Sistema completo de gestión de menú digital para bar/restaurante, compuesto por tres módulos:

- Backend (API REST con Node.js, Express, SQLite)

- Admin Frontend (panel de administración para CRUD de categorías y productos)

- Client Frontend (visualización pública del menú)

## 📱 Client Frontend

Visualización pública del menú, diseñada para ser usada por los clientes desde sus dispositivos móviles.

## 🛠 Tecnologías

- React 19 + TypeScript

- Tailwind CSS v4

- Zustand (estado global)

- Axios

- React Router

- Fuentes locales (Cormorant Garamond, Inter)

## 🚀 Instalación y uso

Clonar el repositorio y acceder a la carpeta client-frontend.

## Instalar dependencias:

`npm install`
Crear archivo .env con la URL del backend:

`VITE_API_URL=http://localhost:5000/api`
Iniciar en modo desarrollo:

`npm run dev`
Construir para producción:

`npm run build`

## 📋 Características

Página de inicio con tarjetas de categorías.

Vista de productos por categoría, con precios en CUP y USD.

Agrupación por subcategoría (ej. "Línea" → Ron, Whisky, Vinos...).

Caché con localStorage: si el backend no responde, se usan los datos almacenados.

Diseño responsivo y orientado a móviles.

Footer fijo con mensaje de "10% de servicio incluido".

Logo como watermark (opacidad baja).
