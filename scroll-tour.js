// ============================================================
// SCROLL-TOUR.JS — Animación de recorrido por habitaciones
// GSAP + ScrollTrigger: crossfade de imágenes según sección
// ============================================================

(function () {
  // Esperar a que GSAP esté disponible
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('GSAP o ScrollTrigger no disponibles');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const tourImages  = document.querySelectorAll('.tour-img');
  const tourSections = document.querySelectorAll('.tour-seccion');

  if (!tourImages.length || !tourSections.length) return;

  // ── Función de cambio de imagen ──────────────────────────
  let imagenActual = 0;

  function cambiarImagen(nuevoIndex) {
    if (nuevoIndex === imagenActual) return;
    if (nuevoIndex < 0 || nuevoIndex >= tourImages.length) return;

    const anterior = tourImages[imagenActual];
    const siguiente = tourImages[nuevoIndex];

    // Crossfade suave
    gsap.to(anterior, {
      opacity: 0,
      scale: 1.04,
      duration: 0.8,
      ease: 'power2.inOut',
      onComplete: () => anterior.classList.remove('activa')
    });

    gsap.fromTo(siguiente,
      { opacity: 0, scale: 1.06 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: 'power2.out',
        onStart: () => siguiente.classList.add('activa')
      }
    );

    imagenActual = nuevoIndex;
  }

  // ── ScrollTrigger por sección ────────────────────────────
  tourSections.forEach((seccion, i) => {
    const roomIndex = parseInt(seccion.dataset.room ?? i);
    const imageTarget = Math.min(roomIndex, tourImages.length - 1);

    ScrollTrigger.create({
      trigger: seccion,
      start: 'top 55%',
      end: 'bottom 45%',
      onEnter: () => cambiarImagen(imageTarget),
      onEnterBack: () => cambiarImagen(imageTarget),
    });

    // Animación de entrada para el contenido de texto
    const contenido = seccion.querySelector('div');
    if (contenido) {
      gsap.fromTo(contenido,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: seccion,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }
  });

  // ── Parallax sutil en la imagen activa ──────────────────
  const panelImagen = document.querySelector('.tour-imagen-panel');
  if (panelImagen) {
    gsap.to(panelImagen, {
      yPercent: -8,
      ease: 'none',
      scrollTrigger: {
        trigger: '#scroll-tour',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });
  }

})();
