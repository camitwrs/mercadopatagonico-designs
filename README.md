# Mercado Patagónico · landing (Astro)

Los 4 diseños de la landing de Mercado Patagónico, implementados en Astro. Es un repositorio aparte de `../DESIGN`.

## Cómo levantarlo

```powershell
npm install
npm run dev
```

Abre http://localhost:4321. Se muestra el **Diseño 1** y arriba hay 4 pestañas.

| Ruta | Diseño |
|---|---|
| `/` | 1 · Bodega y despacho |
| `/diseno-2` | 2 · Mesa servida |
| `/diseno-3` | 3 · La comanda |
| `/diseno-4` | 4 · Puesto de productores |

`npm run build` genera el sitio estático en `dist/`.

## Qué trae

- Español e inglés, y modo claro y oscuro (botones en la barra superior; se recuerdan en el navegador).
- Desktop y mobile (menú hamburguesa bajo 980 px).
- Animaciones al hacer scroll, preguntas frecuentes en acordeón, formulario con validación y mensaje de envío, y una animación propia por diseño. Respeta `prefers-reduced-motion`.

## Estructura

- `src/pages/` una página por diseño. `src/layouts/Viewer.astro` es la barra superior con título y pestañas.
- `src/components/Design1..4.astro` cada diseño. Los demás componentes (`Nav`, `HeroText`, `Garantias`, `Faq`, `ContactForm`…) son compartidos.
- `src/data/i18n.json` todos los textos (ES/EN). `src/lib/svg.js` los dibujos SVG, tomados del plugin de Figma.
- `src/scripts/interact.js` interacciones compartidas. `src/styles/base.css` estilos base.

## Pendiente de definir

- El botón **Ingresar** muestra un aviso: falta la URL de la plataforma.
- El formulario de contacto solo valida en el navegador; no envía datos a ningún lado.
- Las fotos son marcos "Foto del cliente" hasta tener las imágenes.
