<div align="center">
  <img src="https://img.shields.io/badge/Open-Hub-white?style=for-the-badge&color=000&labelColor=000&logoColor=fff" alt="OpenHub Logo">
  <h1 align="center">OpenHub</h1>

  <p align="center">
    <strong>Directorio de Eventos de Tecnología en un Solo Lugar</strong>
  </p>

  <p align="center">
    <a href="#solución"><img src="https://img.shields.io/badge/Solución-SaaS-blue.svg?style=flat-square" alt="SaaS"></a>
    <a href="#stack-tecnológico"><img src="https://img.shields.io/badge/Stack-React%2019%20%7C%20Vite%20%7C%20Tailwind%20v4-blueviolet.svg?style=flat-square" alt="Tech Stack"></a>
    <a href="#licencia"><img src="https://img.shields.io/badge/Licencia-MIT-green.svg?style=flat-square" alt="License"></a>
  </p>
</div>

---

## 📌 Visión General

**OpenHub** es una plataforma orientada a centralizar y promover eventos tecnológicos. Actúa como un directorio interactivo donde usuarios pueden encontrar, filtrar y registrarse en conferencias, hackathons, talleres, cursos y meetups de su interés en un solo lugar. 

La plataforma busca eliminar el *"ruido digital"* generado por la alta fragmentación en la difusión de eventos en múltiples redes, incentivando el aprendizaje colaborativo y conectando a organizadores con su público objetivo de manera eficiente.

## ✨ Características Principales

### Para Asistentes (Estudiantes y Profesionales)
- 🔍 **Directorio Centralizado:** Búsqueda interactiva con filtros avanzados por categoría, fecha o ubicación.
- 🎟️ **Registro Integrado:** Inscripción totalmente gratuita y sencilla.
- 🤝 **Networking:** Descubre comunidades y asiste a eventos relevantes para tu perfil.

### Para Organizadores (SaaS B2B)
- 📊 **Métricas Detalladas:** Analíticas de alcance e interacción de usuarios con el evento.
- 🚀 **Eventos Destacados:** Soluciones para priorizar e impulsar eventos en la red.
- 🔔 **Push Alerts:** Envío de notificaciones push segmentadas a la audiencia correcta.

---

## 🛠 Stack Tecnológico

El Frontend (Landing Page) ha sido desarrollado con tecnologías modernas, asegurando máximo rendimiento, un bundle size optimizado y transiciones cinematográficas:

* **Framework:** React 19
* **Bundler:** Vite (reemplazo ultrarrápido a CRA)
* **Estilos:** Tailwind CSS v4 con inyección de directivas `@theme`.
* **Animaciones:** Framer Motion (Transiciones fluidas, interpolación de hardware)
* **Arquitectura de Estilos:** Diseño *Apple-like* con clases utilitarias personalizadas (`liquid-glass` paramétrico mediante CSS avanzado).

---

## 📁 Arquitectura del Proyecto

El código fuente sigue los estándares de organización más modernos para proyectos en React:

```text
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── index.css       # Configuración Tailwind y clases custom
│   ├── components/
│   │   ├── icons/              # Componentes funcionales SVG
│   │   ├── layout/             # Componentes estructurales (Navbar, Footer)
│   │   └── ui/                 # Componentes atómicos (FadingVideo, BlurText)
│   ├── pages/
│   │   └── LandingPage.jsx     # Ensamblaje de la vista principal
│   ├── App.jsx                 # Wrapper y router raíz
│   └── main.jsx                # Punto de entrada de React
├── index.html                  # Punto de montaje Vite
└── package.json                # Dependencias vía PNPM
```

---

## 🚀 Empezando (Guía de Desarrollo)

### Prerrequisitos

Asegúrate de tener Node.js instalado (v18 o superior recomendado) y **PNPM** como gestor de paquetes.

```bash
npm install -g pnpm
```

### Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone <url-del-repositorio>
cd openhub
pnpm install
```

### Servidor de Desarrollo Local

Ejecuta el servidor de Vite con Hot Module Replacement (HMR):

```bash
pnpm run dev
```

La aplicación se ejecutará en **`http://localhost:5173`**.

### Construcción para Producción

Para compilar el proyecto a código estático optimizado:

```bash
pnpm run build
```

La carpeta `/dist` contendrá todos los assets optimizados listos para ser desplegados en plataformas como Vercel, Netlify o AWS S3.

---

<div align="center">
  <i>Construido con un enfoque obsesivo por la estética y el performance.</i>
</div>
