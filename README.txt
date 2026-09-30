PSC ENERGY - CATALOGO INTERACTIVO 2026

CONTENIDO
- index.html: catálogo interactivo.
- manifest.json: instalación como aplicación web.
- service-worker.js: caché para uso offline.
- assets/: 10 páginas del catálogo e iconos.

PRUEBA EN COMPUTADOR
Para probar la PWA/offline correctamente debe servirse por HTTP/HTTPS; abrir index.html directamente permite revisar la navegación, pero los navegadores no activan Service Worker desde file://.

PUBLICACIÓN
Subir el contenido completo de esta carpeta a un hosting estático HTTPS (por ejemplo GitHub Pages). No se requiere dominio propio.

ANDROID
1. Abrir la URL publicada en Chrome con internet.
2. Menú > Instalar app / Agregar a pantalla principal.
3. Abrir una vez y esperar a que cargue.
4. Luego puede usarse sin conexión desde el icono instalado.

iPHONE / iPAD
1. Abrir la URL publicada en Safari con internet.
2. Compartir > Agregar a pantalla de inicio.
3. Abrir una vez desde el icono y dejar cargar el catálogo.
4. Luego puede usarse sin conexión desde ese icono.

ONLINE
Cualquier visitante puede abrir la misma URL o escanear un QR sin instalar nada.


ACTUALIZACIÓN 2026-09-30
- Se reemplazaron las 10 páginas por el Brochure PSC final.
- Se conserva la navegación interactiva y la misma URL de GitHub Pages.
- Caché PWA actualizado a v3 para que los dispositivos instalados reciban la nueva versión.

PARA ACTUALIZAR GITHUB
1. En el repositorio catalogo-psc-energy, cargar/reemplazar index.html, service-worker.js y la carpeta assets (page-01.png a page-10.png).
2. Mantener manifest.json e iconos.
3. Hacer Commit changes.
4. Abrir el catálogo con internet y recargar una vez. En dispositivos instalados, abrir con internet para recibir la actualización antes de volver a modo offline.
