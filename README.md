# pwa-offline-starter

![stack: JavaScript](https://img.shields.io/badge/stack--JavaScript-0d9488?style=flat-square) ![stack: Service Worker](https://img.shields.io/badge/stack--Service%20Worker-0d9488?style=flat-square) ![stack: Web App Manifest](https://img.shields.io/badge/stack--Web%20App%20Manifest-0d9488?style=flat-square) [![Demo](https://img.shields.io/badge/demo-en%20vivo-22c55e?style=flat-square)](https://luisf2020.github.io/pwa-offline-starter/)
![IA: asistido](https://img.shields.io/badge/IA--asistido-6366f1?style=flat-square)

PWA minima: service worker con precache (cache-first), manifest e indicador de conexion.

> **Transparencia sobre IA:** este proyecto se desarrollo con asistencia de inteligencia artificial (generacion de codigo, revision y documentacion). El codigo fue leido, ejecutado y probado manualmente antes de publicarse. No declara clientes, metricas ni resultados que no puedan verificarse.

## Problema que resuelve

Que una pequena aplicacion web siga funcionando con la red caida o intermitente.

## Solucion implementada

Service worker con precache de los assets (cache-first), manifest instalable e indicador de estado de conexion; si falla la red responde desde la cache.

### Funcionalidades principales

- Service worker con precache y limpieza de versiones
- Estrategia cache-first
- Manifest instalable (standalone)
- Aviso de estado en linea/sin conexion

## Stack

- JavaScript
- Service Worker
- Web App Manifest

## Estructura

```
index.html           # pagina
app.js               # logica y estado online/offline
sw.js                # service worker
manifest.webmanifest
```

## Puesta en marcha

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Complejidad del proyecto

**Nivel: Intermedio** — Intercepta peticiones, gestiona cache y versiones; requiere HTTPS para activarse.

El nivel describe la complejidad tecnica del proyecto, no el grado de dominio de quien lo escribio.

## Despliegue

Demo en vivo: <https://luisf2020.github.io/pwa-offline-starter/>  
Publicado con GitHub Pages (rama `gh-pages`).

## Autor

**Luis Felipe Zuniga Leon** — Desarrollador de software asistido por IA

- GitHub: <https://github.com/Luisf2020>
- Correo: developerluis2@gmail.com
- WhatsApp: +504 3237 0056

---

_Proyecto de portafolio. El desarrollo se apoyo en herramientas de IA bajo revision tecnica humana._
