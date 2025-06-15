# Total Renting 🚗

Plataforma web  para la gestión y alquiler de vehículos, construida con las últimas tecnologías web.

## 🚀 Características

- 🎯 Búsqueda avanzada de vehículos con múltiples filtros
- 📱 Diseño responsive y optimizado para móviles
- 🖼️ Optimización de imágenes y rendimiento
- 🔍 SEO optimizado con Next.js
- 🔐 Autenticación segura
- 📊 Panel de administración intuitivo

## 🛠️ Stack Tecnológico

### Frontend
- **Next.js 14** - Framework React con SSR y App Router
- **React 18** - Biblioteca UI con Server Components
- **TypeScript** - Tipado estático para mejor mantenibilidad
- **Tailwind CSS** - Framework CSS utility-first
- **DaisyUI** - Componentes UI pre-construidos

### Backend
- **Node.js** - Runtime de JavaScript
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **Next.js API Routes** - API endpoints

## 📋 Requisitos Previos

- Node.js 18.17.0 o superior
- MongoDB 6.0 o superior
- npm 9.0.0 o superior

## 🚀 Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/total-renting.git
cd total-renting
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
Crea un archivo `.env.local` en la raíz del proyecto:
```env
# Base de datos
MONGODB_URI=mongodb://localhost:27017/total_renting

# API
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Autenticación
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=tu_secreto_aqui

# Opcional: Configuración de imágenes
NEXT_PUBLIC_IMAGE_DOMAIN=tu-dominio.com
```

4. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 🏗️ Arquitectura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── api/               # API Routes
│   ├── (auth)/           # Rutas autenticadas
│   └── (public)/         # Rutas públicas
├── components/            # Componentes React
│   ├── ui/               # Componentes UI reutilizables
│   ├── vehicles/         # Componentes específicos de vehículos
│   └── layout/           # Componentes de layout
├── lib/                  # Utilidades y configuración
│   ├── mongodb.js        # Conexión a MongoDB
│   └── auth.ts           # Configuración de autenticación
├── models/               # Modelos de Mongoose
├── services/            # Servicios de negocio
├── types/               # Tipos de TypeScript
└── utils/               # Funciones utilitarias
```

## 💡 Decisiones Técnicas

### 1. Next.js App Router
- Utilizamos el nuevo App Router de Next.js para mejor rendimiento y SEO
- Server Components por defecto para reducir el JavaScript del cliente
- Streaming y Suspense para mejor UX

### 2. Arquitectura de Componentes
- Componentes Server por defecto
- "use client" solo cuando es necesario
- Componentes modulares y reutilizables
- Nombres descriptivos con prefijos de tipo (Button, Card, etc.)

### 3. Optimización de Rendimiento
- Lazy loading de imágenes
- Optimización de fuentes
- Caché de consultas a MongoDB
- Minimización de JavaScript del cliente

### 4. Base de Datos
- MongoDB para flexibilidad en el esquema
- Mongoose para validación y tipado
- Índices optimizados para búsquedas
- Caché de conexiones

### 5. UI/UX
- Diseño mobile-first
- Tailwind CSS para estilos consistentes
- DaisyUI para componentes pre-construidos
- Accesibilidad WCAG 2.1

## 📚 API Endpoints

### Vehículos
- `GET /api/vehicles` - Listar vehículos
- `GET /api/vehicles/[id]` - Detalles de vehículo
- `GET /api/vehicles/search` - Búsqueda avanzada
- `POST /api/vehicles` - Crear vehículo (admin)
- `PUT /api/vehicles/[id]` - Actualizar vehículo (admin)
- `DELETE /api/vehicles/[id]` - Eliminar vehículo (admin)

### Autenticación
- `POST /api/auth/[...nextauth]` - Endpoints de autenticación


## 📦 Scripts Disponibles

```bash
npm run dev        # Desarrollo
npm run build     # Build de producción
npm run start     # Iniciar producción
npm run lint      # Linting
npm run format    # Formatear código
```

