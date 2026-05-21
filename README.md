# Portfolio — Ruth Daniela Aguirre

## Stack
- React 18 + Vite
- Framer Motion (animaciones de scroll y reveal)
- Lenis (smooth scroll cinematográfico)
- React Router DOM
- Arquitectura atómica (atoms → organisms → pages)

## Arrancar

```bash
pnpm install
pnpm dev
```

Abre http://localhost:5173

## Personalizar

- **Contenido e idiomas**: edita el diccionario base en `src/i18n.jsx`
- **Backend opcional**: si quieres que el frontend consuma datos desde PHP, define `VITE_PORTFOLIO_API_URL` apuntando a tu endpoint, por ejemplo `http://localhost/backend/index.php`
- **API PHP**: el backend de ejemplo vive en `../backend/index.php` y devuelve contenido bilingue parcial para proyectos, meta y enlaces
- **Colores**: variables CSS en `src/styles/global.css` (líneas 1-10)

## Build para producción

```bash
pnpm build
```

Los archivos salen en `/dist` — súbelos a Vercel, Netlify o cualquier hosting estático.
