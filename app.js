const estado = document.getElementById('estado');
const lista = document.getElementById('lista');

async function cargarItems() {
  const cache = await caches.open('datos-v1');
  try {
    const res = await fetch('./data.json', { cache: 'no-store' });
    if (res.ok) await cache.put('./data.json', res.clone());
    return (await res.json()).items;
  } catch (e) {
    const cached = await cache.match('./data.json');
    return cached ? (await cached.json()).items : [];
  }
}

function pintar(items) {
  estado.textContent = navigator.onLine ? 'En linea' : 'Sin conexion (datos en cache)';
  lista.innerHTML = items.map((t) => `<li>${t}</li>`).join('');
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js');
}

cargarItems().then(pintar);
window.addEventListener('online', () => cargarItems().then(pintar));
