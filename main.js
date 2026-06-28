// ============================================================
// MAIN.JS — Buhonegro Propiedades
// Navegación, renderizado de cards, filtros, formularios, leads
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Inicializar CONFIG desde data.js ──────────────────────
  aplicarConfig();

  // ── Header sticky ─────────────────────────────────────────
  initHeader();

  // ── Menú mobile ───────────────────────────────────────────
  initMenuMobile();

  // ── Renderizar propiedades destacadas ─────────────────────
  renderDestacadas();

  // ── Renderizar todas las propiedades ──────────────────────
  renderPropiedades(PROPIEDADES);

  // ── Renderizar zonas ──────────────────────────────────────
  renderZonas();

  // ── Renderizar testimonios ────────────────────────────────
  renderTestimonios();

  // ── Filtros de búsqueda ───────────────────────────────────
  initFiltros();

  // ── Buscador hero ─────────────────────────────────────────
  initBuscadorHero();

  // ── Formularios ───────────────────────────────────────────
  initFormularios();

  // ── FAQ accordion ─────────────────────────────────────────
  initFAQ();

  // ── Animaciones fade-up ───────────────────────────────────
  initFadeUp();

  // ── Smooth scroll nav mobile ──────────────────────────────
  initNavLinks();
});


// ── CONFIG ──────────────────────────────────────────────────
function aplicarConfig() {
  const wspUrl = `https://wa.me/${CONFIG.whatsapp}?text=Hola%2C%20me%20comunico%20desde%20la%20web%20de%20Buhonegro%20Propiedades.`;

  document.querySelectorAll('[id^="btn-wsp"]').forEach(el => el.href = wspUrl);
  document.querySelectorAll('#footer-wsp').forEach(el => el.href = wspUrl);

  const tel = document.getElementById('contacto-telefono');
  const mail = document.getElementById('contacto-email');
  const dir = document.getElementById('contacto-direccion');
  const hor = document.getElementById('contacto-horarios');

  if (tel) tel.textContent = CONFIG.telefono;
  if (mail) mail.textContent = CONFIG.email;
  if (dir) dir.textContent = CONFIG.direccion;
  if (hor) hor.textContent = CONFIG.horarios;
}


// ── HEADER ──────────────────────────────────────────────────
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}


// ── MENÚ MOBILE ─────────────────────────────────────────────
function initMenuMobile() {
  const toggle = document.getElementById('menu-toggle');
  const navMobile = document.getElementById('nav-mobile');
  const close = document.getElementById('nav-mobile-close');

  if (!toggle || !navMobile) return;

  toggle.addEventListener('click', () => navMobile.classList.add('abierto'));
  close.addEventListener('click', () => navMobile.classList.remove('abierto'));

  navMobile.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navMobile.classList.remove('abierto'));
  });
}


// ── NAV LINKS smooth scroll ──────────────────────────────────
function initNavLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}


// ── RENDERIZADO ─────────────────────────────────────────────
function formatPrecio(precio, moneda) {
  if (!precio) return '';
  const sym = moneda === 'USD' ? 'USD ' : '$ ';
  return sym + precio.toLocaleString('es-AR');
}

function crearCardPropiedad(prop) {
  const badgeLabel = prop.tipoOperacion === 'venta' ? 'Venta' : 'Alquiler';
  const badgeClass = prop.tipoOperacion === 'venta' ? 'badge-venta' : 'badge-alquiler';
  const img = prop.imagenes[0] || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=70';

  const expensasHtml = prop.expensas
    ? `<span style="font-size:.78rem;color:var(--gris-claro);">+ $${prop.expensas.toLocaleString('es-AR')} expensas</span>`
    : '';

  const dormHtml = prop.dormitorios > 0
    ? `<div class="spec-item"><svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>${prop.dormitorios} dorm.</div>`
    : '';

  const card = document.createElement('article');
  card.className = 'card-propiedad';
  card.innerHTML = `
    <div class="card-imagen">
      <img src="${img}" alt="${prop.titulo}" loading="lazy" />
      <span class="card-badge ${badgeClass}">${badgeLabel}</span>
      ${prop.destacado ? '<span class="card-badge badge-destacada" style="left:auto;right:14px;">⭐ Destacada</span>' : ''}
    </div>
    <div class="card-body">
      <div class="card-precio">
        ${formatPrecio(prop.precio, prop.moneda)}
        <span>/ ${prop.tipoOperacion === 'alquiler' ? 'mes' : ''}</span>
      </div>
      ${expensasHtml}
      <h3 class="card-titulo">${prop.titulo}</h3>
      <div class="card-ubicacion">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
        ${prop.barrio}, ${prop.localidad}
      </div>
      <div class="card-specs">
        ${prop.ambientes > 0 ? `<div class="spec-item"><svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>${prop.ambientes} amb.</div>` : ''}
        ${dormHtml}
        ${prop.banos > 0 ? `<div class="spec-item"><svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h16M4 12a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v4a2 2 0 01-2 2"/></svg>${prop.banos} baño${prop.banos > 1 ? 's' : ''}</div>` : ''}
        ${prop.superficieCubierta > 0 ? `<div class="spec-item"><svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z"/></svg>${prop.superficieCubierta}m²</div>` : ''}
        ${prop.cocheras > 0 ? `<div class="spec-item">🚗 ${prop.cocheras}</div>` : ''}
      </div>
      <div class="card-actions">
        <a href="${prop.linkDetalle}" class="btn btn-primario btn-sm">Ver propiedad</a>
        <a href="https://wa.me/${CONFIG.whatsapp}?text=Hola%2C%20consulto%20por%20la%20propiedad%20${encodeURIComponent(prop.titulo)}" class="btn btn-wsp btn-sm" target="_blank">💬</a>
      </div>
    </div>
  `;
  return card;
}

function renderDestacadas() {
  const grid = document.getElementById('grid-destacadas');
  if (!grid) return;
  const destacadas = PROPIEDADES.filter(p => p.destacado && p.disponible);
  destacadas.forEach(p => grid.appendChild(crearCardPropiedad(p)));
}

function renderPropiedades(lista) {
  const grid = document.getElementById('grid-propiedades');
  const noRes = document.getElementById('no-resultados');
  const count = document.getElementById('resultado-count');
  if (!grid) return;

  grid.innerHTML = '';

  if (lista.length === 0) {
    noRes && noRes.classList.remove('hidden');
    if (count) count.textContent = '0';
    return;
  }

  noRes && noRes.classList.add('hidden');
  if (count) count.textContent = lista.length;
  lista.forEach(p => grid.appendChild(crearCardPropiedad(p)));
}

function renderZonas() {
  const grid = document.getElementById('grid-zonas');
  if (!grid) return;
  ZONAS.forEach(z => {
    const card = document.createElement('a');
    card.href = `#propiedades`;
    card.className = 'zona-card';
    card.innerHTML = `
      <img src="${z.imagen}" alt="${z.nombre}" loading="lazy" />
      <div class="zona-overlay"></div>
      <div class="zona-info">
        <div class="zona-nombre">${z.nombre}</div>
        <div class="zona-desc">${z.descripcion}</div>
        <div class="zona-count">🏠 ${z.propiedadesDisponibles} propiedades disponibles</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderTestimonios() {
  const grid = document.getElementById('grid-testimonios');
  if (!grid) return;
  TESTIMONIOS.forEach(t => {
    const card = document.createElement('div');
    card.className = 'testimonio-card';
    const iniciales = t.nombre.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
    card.innerHTML = `
      <div class="stars">${'★'.repeat(t.valoracion)}</div>
      <p class="testimonio-texto">"${t.texto}"</p>
      <div class="testimonio-autor">
        <div class="autor-avatar">${iniciales}</div>
        <div>
          <div class="autor-nombre">${t.nombre}</div>
          <div class="autor-operacion">${t.operacion}</div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}


// ── FILTROS ──────────────────────────────────────────────────
function initFiltros() {
  const form = document.getElementById('form-filtros');
  const btnLimpiar = document.getElementById('btn-limpiar-filtros');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    aplicarFiltros();
  });

  ['f-operacion','f-tipo','f-zona','f-dormitorios','f-precio-min','f-precio-max','f-moneda','f-cochera','f-orden'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', aplicarFiltros);
    if (el && el.tagName === 'INPUT') el.addEventListener('input', debounce(aplicarFiltros, 400));
  });

  if (btnLimpiar) {
    btnLimpiar.addEventListener('click', () => {
      form.reset();
      aplicarFiltros();
    });
  }
}

function aplicarFiltros() {
  const operacion   = document.getElementById('f-operacion')?.value || '';
  const tipo        = document.getElementById('f-tipo')?.value || '';
  const zona        = (document.getElementById('f-zona')?.value || '').toLowerCase().trim();
  const dormitorios = parseInt(document.getElementById('f-dormitorios')?.value) || 0;
  const precioMin   = parseFloat(document.getElementById('f-precio-min')?.value) || 0;
  const precioMax   = parseFloat(document.getElementById('f-precio-max')?.value) || Infinity;
  const moneda      = document.getElementById('f-moneda')?.value || '';
  const cochera     = document.getElementById('f-cochera')?.value || '';
  const orden       = document.getElementById('f-orden')?.value || 'destacado';

  let resultado = PROPIEDADES.filter(p => {
    if (!p.disponible) return false;
    if (operacion && p.tipoOperacion !== operacion) return false;
    if (tipo && p.tipoPropiedad !== tipo) return false;
    if (zona && !(`${p.localidad} ${p.barrio}`.toLowerCase().includes(zona))) return false;
    if (dormitorios === 4 && p.dormitorios < 4) return false;
    if (dormitorios > 0 && dormitorios < 4 && p.dormitorios !== dormitorios) return false;
    if (p.precio < precioMin) return false;
    if (p.precio > precioMax) return false;
    if (moneda && p.moneda !== moneda) return false;
    if (cochera === 'si' && p.cocheras < 1) return false;
    return true;
  });

  if (orden === 'precio-asc')  resultado.sort((a, b) => a.precio - b.precio);
  if (orden === 'precio-desc') resultado.sort((a, b) => b.precio - a.precio);
  if (orden === 'destacado')   resultado.sort((a, b) => (b.destacado ? 1 : 0) - (a.destacado ? 1 : 0));

  renderPropiedades(resultado);
  document.getElementById('propiedades')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


// ── BUSCADOR HERO ────────────────────────────────────────────
function initBuscadorHero() {
  const form = document.getElementById('form-buscador-hero');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const operacion = document.getElementById('h-operacion')?.value || '';
    const tipo      = document.getElementById('h-tipo')?.value || '';
    const zona      = document.getElementById('h-zona')?.value || '';

    if (operacion) { const el = document.getElementById('f-operacion'); if (el) el.value = operacion; }
    if (tipo)      { const el = document.getElementById('f-tipo');      if (el) el.value = tipo; }
    if (zona)      { const el = document.getElementById('f-zona');      if (el) el.value = zona; }

    aplicarFiltros();
    document.getElementById('propiedades')?.scrollIntoView({ behavior: 'smooth' });
  });
}


// ── FORMULARIOS / LEADS ──────────────────────────────────────
function initFormularios() {
  const forms = document.querySelectorAll('form[data-canal]');
  forms.forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const canal = form.dataset.canal;
      const datos = capturarFormulario(form, canal);
      await enviarLead(datos, form);
    });
  });
}

function capturarFormulario(form, canal) {
  const data = Object.fromEntries(new FormData(form));
  return {
    nombre:            data.nombre || '',
    telefono:          data.telefono || '',
    email:             data.email || '',
    tipoConsulta:      data.tipoConsulta || canal,
    tipoOperacion:     data.operacion || '',
    tipoPropiedad:     data.tipoPropiedad || '',
    zona:              data.zona || '',
    presupuesto:       data.presupuesto || '',
    mensaje:           data.mensaje || '',
    propiedadConsultada: data.propiedadConsultada || '',
    canalOrigen:       canal,
    fechaConsulta:     new Date().toISOString(),
    garantia:          data.garantia || '',
    mascotas:          data.mascotas || '',
    objetivo:          data.objetivo || '',
    superficie:        data.superficie || '',
    estado:            data.estado || '',
  };
}

async function enviarLead(datos, form) {
  const btn = form.querySelector('button[type="submit"]');
  const textoOriginal = btn?.textContent;

  if (btn) { btn.textContent = 'Enviando…'; btn.disabled = true; }

  try {
    if (CONFIG.webhook && CONFIG.webhook !== 'https://tu-webhook-aqui.com/leads') {
      await fetch(CONFIG.webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos),
      });
    }

    // Guardar localmente como fallback
    const leads = JSON.parse(localStorage.getItem('buhonegro_leads') || '[]');
    leads.push(datos);
    localStorage.setItem('buhonegro_leads', JSON.stringify(leads));

    form.reset();
    mostrarToast('✅ Consulta enviada. Te respondemos pronto.', 'exito');
  } catch (err) {
    console.error('Error al enviar lead:', err);
    mostrarToast('Hubo un error. Intentá por WhatsApp.', 'error');
  } finally {
    if (btn) { btn.textContent = textoOriginal; btn.disabled = false; }
  }
}


// ── FAQ ──────────────────────────────────────────────────────
function initFAQ() {
  // Tabs
  document.querySelectorAll('.faq-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.faq-tab').forEach(t => t.classList.remove('activo'));
      document.querySelectorAll('.faq-lista').forEach(l => l.classList.remove('activa'));
      tab.classList.add('activo');
      const target = document.querySelector(`[data-tab-content="${tab.dataset.tab}"]`);
      if (target) target.classList.add('activa');
    });
  });

  // Accordion
  document.querySelectorAll('.faq-pregunta').forEach(preg => {
    preg.addEventListener('click', () => {
      const item = preg.closest('.faq-item');
      const yaAbierto = item.classList.contains('abierto');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('abierto'));
      if (!yaAbierto) item.classList.add('abierto');
    });
  });
}


// ── FADE UP ANIMACIONES ──────────────────────────────────────
function initFadeUp() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}


// ── TOAST ────────────────────────────────────────────────────
function mostrarToast(mensaje, tipo = 'exito') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = mensaje;
  toast.className = `toast ${tipo} visible`;
  setTimeout(() => toast.classList.remove('visible'), 4000);
}


// ── UTILS ────────────────────────────────────────────────────
function debounce(fn, ms) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}
