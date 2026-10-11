# pwa-offline-starter

PWA minima: service worker con precache (cache-first), manifest e indicador de conexion.

> Proyecto de portafolio de Luis Felipe Zuniga Leon. Desarrollado con asistencia de IA
> (generacion de codigo, revision y documentacion); el codigo fue revisado y probado manualmente.
> No declara clientes, metricas ni resultados no verificables.

## Stack

- JavaScript
- Service Worker
- Web App Manifest

## Como ejecutar

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Estructura

```
index.html           # pagina
app.js               # logica y estado online/offline
sw.js                # service worker
manifest.webmanifest
```

## Estado

Muestra tecnica de portafolio. Sin datos de produccion.
