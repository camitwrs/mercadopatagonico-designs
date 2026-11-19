// Interacciones compartidas por los cuatro diseños.
const root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const store = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* sin almacenamiento */ } };

// alto real de la barra superior, para los anclas
const bar = $('#vbar');
const setBar = () => root.style.setProperty('--bar-h', (bar ? bar.offsetHeight : 56) + 'px');
setBar();
addEventListener('resize', setBar);

// idioma y tema
function setLang(l) {
  root.dataset.lang = l; root.lang = l; store('mp-lang', l);
}
$$('[data-lang-toggle]').forEach((b) => b.addEventListener('click', () => setLang(root.dataset.lang === 'es' ? 'en' : 'es')));
$$('[data-set-lang]').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.setLang)));
$$('[data-theme-toggle]').forEach((b) => b.addEventListener('click', () => {
  const t = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = t; store('mp-theme', t);
}));

// aviso breve
const toast = $('#toast');
let toastT;
function say(es, en) {
  if (!toast) return;
  toast.textContent = root.dataset.lang === 'en' ? en : es;
  toast.classList.add('show');
  clearTimeout(toastT);
  toastT = setTimeout(() => toast.classList.remove('show'), 2600);
}
$$('[data-login]').forEach((a) => a.addEventListener('click', (e) => {
  e.preventDefault();
  say('Aquí irá el enlace a la plataforma (por definir).', 'The platform link will go here (to be defined).');
}));

// aparición al hacer scroll
const rv = $$('[data-reveal]');
if ('IntersectionObserver' in window && !reduce) {
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
  rv.forEach((el) => io.observe(el));
} else rv.forEach((el) => el.classList.add('in'));

// elementos que se activan al entrar en pantalla (data-live añade .live)
const lv = $$('[data-live]');
if ('IntersectionObserver' in window) {
  const io2 = new IntersectionObserver((es) => es.forEach((e) => {
    e.target.classList.toggle('live', e.isIntersecting);
  }), { threshold: 0.35 });
  lv.forEach((el) => io2.observe(el));
} else lv.forEach((el) => el.classList.add('live'));

// menú móvil
$$('.nav').forEach((nav) => {
  const btn = $('[data-menu-btn]', nav);
  if (!btn) return;
  const close = () => { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); };
  btn.addEventListener('click', () => {
    const o = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(o));
  });
  $$('a', nav).forEach((a) => a.addEventListener('click', close));
});

// sección activa en el menú
const spy = $$('[data-spy]');
if (spy.length && 'IntersectionObserver' in window) {
  const map = new Map(spy.map((a) => [a.dataset.spy, a]));
  const so = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) {
      spy.forEach((a) => a.classList.remove('on'));
      const a = map.get(e.target.id); if (a) a.classList.add('on');
    }
  }), { rootMargin: '-45% 0px -50% 0px' });
  map.forEach((_, id) => { const s = document.getElementById(id); if (s) so.observe(s); });
}

// preguntas frecuentes (acordeón)
$$('.faq-item').forEach((item) => {
  const q = $('.faq-q', item);
  q.addEventListener('click', () => {
    const open = !item.classList.contains('open');
    item.classList.toggle('open', open);
    q.setAttribute('aria-expanded', String(open));
  });
});

// formulario de contacto (solo validación en el navegador)
$$('form[data-contact]').forEach((form) => {
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const check = (f) => {
    const input = $('input, select', f);
    const v = input.value.trim();
    let ok = v !== '';
    if (ok && input.type === 'email') ok = email.test(v);
    if (ok && input.type === 'tel') ok = v.replace(/\D/g, '').length >= 7;
    f.classList.toggle('err', !ok);
    return ok;
  };
  const fields = $$('.field', form);
  fields.forEach((f) => {
    const input = $('input, select', f);
    input.addEventListener('blur', () => { if (input.value) check(f); });
    input.addEventListener('input', () => { if (f.classList.contains('err')) check(f); });
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const bad = fields.filter((f) => !check(f));
    if (bad.length) { $('input, select', bad[0]).focus(); return; }
    form.classList.add('sent');
  });
  $$('[data-again]', form).forEach((b) => b.addEventListener('click', () => { form.reset(); form.classList.remove('sent'); }));
});

// zonas con parallax / inclinación según el puntero: fijan --mx y --my (de -1 a 1)
if (!reduce && matchMedia('(hover: hover)').matches) {
  $$('[data-zone]').forEach((z) => {
    let raf = 0;
    z.addEventListener('pointermove', (e) => {
      const r = z.getBoundingClientRect();
      const mx = ((e.clientX - r.left) / r.width) * 2 - 1, my = ((e.clientY - r.top) / r.height) * 2 - 1;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => { z.style.setProperty('--mx', mx.toFixed(3)); z.style.setProperty('--my', my.toFixed(3)); });
    });
    z.addEventListener('pointerleave', () => { z.style.setProperty('--mx', 0); z.style.setProperty('--my', 0); });
  });
}
