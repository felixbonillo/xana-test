# Farmacia Xana — Seccion de Localizacion

Implementación técnica de alta fidelidad del sistema de localización de sucursales de Farmacia Xana.

Este proyecto está diseñado siguiendo principios de Clean Architecture y una metodología Feature-First, separando infraestructura, dominio y presentación.

## Tecnologías principales

- **Next.js 15+ (App Router)** — Client Components optimizados y Server-side Font Optimization.
- **TypeScript (strict)** — Sin `any`; interfaces compartidas entre store, hooks y componentes.
- **Tailwind CSS v4.1** — Tokens de diseño.
- **Zustand** — Estado global ligero para paginación y filtrado de regiones.
- **TanStack Query v5** — Cacheo y sincronización de estado del servidor.

## Arquitectura (Separation of Concerns)

La aplicación se organiza en capas siguiendo SOLID:

- **Capa de Infraestructura (Data Layer)**: Hooks como `usePharmacyLocator` para consumo de API y manejo de errores.
- **Lógica de Aplicación (Custom Hooks)**:
	- `usePharmacyLogic`: lógica de paginación (sliding window) y construcción de URLs de Google Maps.
	- `useLocatorHydration`: sincroniza el estado global con la respuesta inicial de la API.
- **Capa de Presentación (UI Layer)**: componentes atómicos (Figma-driven) desacoplados de la lógica.

## Características destacadas

- **Fidelidad visual y tipografía**: Poppins Bold 700 con medidas del diseño (64px, line-height 56px, letter-spacing -3%).
- **Inteligencia responsiva**:
	- Desktop (≥1024px): grid de 3 columnas y controles de paginación posicionados absolutamente.
	- iPad (768–1023px): selector custom (dropdown) para mejor ergonomía táctil.
	- Mobile (<768px): botón `Ver direcciones` a `w-full` siguiendo la Ley de Fitts.
- **Selector personalizado**: reemplazo del `<select>` nativo por un pseudo-select estilizado (Z-index 50) para consistencia visual.
- **Integración con Google Maps**: construcción dinámica de búsquedas como:

```
https://www.google.com/maps/search/Farmacia+Xana+En+[Nombre_Ciudad]
```

## Instalación

Instalar dependencias:

```bash
npm install
```

Iniciar entorno de desarrollo:

```bash
npm run dev
```

Compilar para producción:

```bash
npm run build
```

## Estructura relevante del proyecto

- `src/features/locator` — lógica y componentes del localizador.
- `src/shared/components` — componentes UI reutilizables.

## Autor

Felix Bonillo — Arquitecto responsable (Prueba técnica: Farmacia Xana)

---

