/* ═══════════════════════════════════════════
   FORZINOVA — script.js
   Web pública (index.html: apps, proyectos, donaciones, contacto, i18n)
   y panel de administración (admin.html). Se distinguen por <body data-pagina>.
═══════════════════════════════════════════ */

// strict mode removed to ensure global onclick compatibility

// ════════════════════════════════════════════
// DATA
// ════════════════════════════════════════════
const APPS_DATA = [
  { id:'tarot',   icon:'🔮', title:'App Tarot Automático',    desc:'Lecturas de tarot instantáneas potenciadas por IA. Interpreta tiradas con análisis simbólico profundo.',   progress:10,  color:'gold',  btn:'review',  btnText:'REVISAR DOC' },
  { id:'astro',   icon:'⭐', title:'App Consulta Astro',      desc:'Consulta tu carta natal, tránsitos y pronósticos astrológicos con motor de cálculo propio.',               progress:25,  color:'blue',  btn:'access',  btnText:'ACCEDER' },
  { id:'ventas',  icon:'📈', title:'App Automatización de Ventas', desc:'CRM inteligente con flujos de ventas automatizados, seguimiento de leads y reportes en tiempo real.', progress:5,   color:'cyan',  btn:'review',  btnText:'REVISAR DOC' },
  { id:'hogar',   icon:'🏠', title:'App Digitaliza tu Hogar', desc:'Plataforma IoT para gestionar dispositivos inteligentes, automatizar rutinas y monitorear tu hogar.',      progress:7,   color:'gold',  btn:'explore', btnText:'EXPLORAR' },
  { id:'it',      icon:'💻', title:'App Ecosistema IT',       desc:'Suite completa para gestión de infraestructura, monitoreo de servidores y soporte técnico centralizado.',   progress:12,  color:'blue',  btn:'review',  btnText:'REVISAR DOC' },
  { id:'trading', icon:'📊', title:'App Trading Automático',  desc:'Bot de trading con estrategias de IA, análisis técnico y ejecución automática en múltiples exchanges.',    progress:null, color:'cyan', btn:'explore', btnText:'EXPLORAR' },
];

const PROJECTS_DATA = [
  { name:'Creación de Blockchain NOVAChain',         progress:1 },
  { name:'Despliegue de Criptomoneda NOVACripty',    progress:5 },
  { name:'Plataforma NOVASecurity',                  progress:1 },
  { name:'Plataforma NOVALearn',                     progress:1 },
];

// ════════════════════════════════════════════
// I18N
// ════════════════════════════════════════════
const TRANSLATIONS = {
  es: {
    navApps:'Apps', navProjects:'Proyectos', navSupport:'Apoya', navLearn:'Aprende', navContact:'Contacto',
    heroTitle:'LA EVOLUCIÓN<br>DIGITAL',
    heroDesc:'Creamos software y automatizaciones con inteligencia artificial para resolver problemas reales, en casa y en la empresa.',
    btnEcosystem:'Ver las apps', btnSupportHero:'Apoya el proyecto',
    appsTitle:'NUESTRAS APPS',
    appsDesc:'Aplicaciones para simplificar el día a día, tanto a nivel personal como empresarial. Este es su estado de desarrollo.',
    appProgress:'Desarrollo', appInDev:'En desarrollo', appSoon:'Todavía no está disponible. Te avisaremos cuando lo esté.',
    projTitle:'PROYECTOS', projDesc:'Las plataformas de largo plazo en las que trabajamos, con su avance actual.',
    investTitle:'APOYA EL PROYECTO',
    investDesc:'Forzinova se financia con donaciones. Si te interesa lo que construimos, puedes apoyarnos aquí. Las donaciones no son una inversión ni dan participación en la empresa.',
    investPaypal:'Donación con tu cuenta de PayPal o con tarjeta.',
    investGofund:'Aporta a nuestra campaña de financiación colectiva.',
    investBinance:'Donación en criptomonedas a nuestra dirección de Binance.',
    btnDonate:'Donar con PayPal', btnSupport:'Apoyar en GoFundMe', btnBinance:'Ver la dirección', newTab:' (se abre en otra pestaña)',
    binanceHelp:'Copia esta dirección en Binance para enviar tu donación.', btnCopy:'Copiar dirección', btnClose:'Cerrar',
    copied:'Dirección copiada.', copyFail:'No se pudo copiar: selecciónala y cópiala a mano.',
    learnTitle:'APRENDE',
    learnDesc:'NovaLearn, nuestra plataforma de cursos sobre tecnología, IA y automatización, está en preparación.',
    feat1:'Cursos en vídeo bajo demanda', feat2:'Certificaciones blockchain',
    feat3:'Tutoriales de IA y automatización', feat4:'Comunidad de aprendizaje',
    learnSoonTitle:'NovaLearn · Próximamente', learnSoonText:'Déjanos tu correo y te avisamos cuando abra.', btnNotify:'Avísame cuando abra',
    contactTitle:'CONTACTO',
    contactSubtitle:'¿Tienes una propuesta?',
    contactText:'Estamos abiertos a colaboraciones y propuestas tecnológicas. Escríbenos y te responderemos.',
    nameLabel:'Nombre', emailLabel:'Correo electrónico', msgLabel:'Mensaje', passLabel:'Contraseña',
    errName:'Escribe tu nombre.', errEmail:'Escribe un correo válido para poder responderte.', errMsg:'Escribe tu mensaje.',
    btnSend:'Escribir el correo',
    contactNote:'Al pulsar se abrirá tu programa de correo con el mensaje preparado para enviarlo.',
    successMsg:'Se ha abierto tu programa de correo con el mensaje. Si no se abre, escríbenos a {email}.',
    loginBrand:'PANEL ADMIN', loginTitle:'Acceso seguro',
    loginSubtitle:'Credenciales de administrador requeridas',
    userLabel:'Usuario', btnLogin:'Iniciar sesión', loginError:'Usuario o contraseña incorrectos.', backToSite:'Volver a la web',
    footerCopy:'© 2026 Forzinova. Todos los derechos reservados.',
    footerHome:'Inicio', footerApps:'Apps', footerContact:'Contacto', footerAdmin:'Administración',
    menuOpen:'Abrir el menú', menuClose:'Cerrar el menú', langLabel:'Cambiar idioma',
  },
  en: {
    navApps:'Apps', navProjects:'Projects', navSupport:'Support', navLearn:'Learn', navContact:'Contact',
    heroTitle:'THE DIGITAL<br>EVOLUTION',
    heroDesc:'We build software and AI-powered automation that solves real problems, at home and at work.',
    btnEcosystem:'See the apps', btnSupportHero:'Support the project',
    appsTitle:'OUR APPS',
    appsDesc:'Apps that simplify everyday life, for people and for businesses. This is where each one stands.',
    appProgress:'Development', appInDev:'In development', appSoon:'Not available yet. We will let you know when it is.',
    projTitle:'PROJECTS', projDesc:'The long-term platforms we are working on, with their current progress.',
    investTitle:'SUPPORT THE PROJECT',
    investDesc:'Forzinova is funded by donations. If you like what we build, you can support us here. Donations are not an investment and give no stake in the company.',
    investPaypal:'Donate with your PayPal account or a card.',
    investGofund:'Contribute to our crowdfunding campaign.',
    investBinance:'Donate in crypto to our Binance address.',
    btnDonate:'Donate with PayPal', btnSupport:'Support on GoFundMe', btnBinance:'Show the address', newTab:' (opens in a new tab)',
    binanceHelp:'Copy this address into Binance to send your donation.', btnCopy:'Copy address', btnClose:'Close',
    copied:'Address copied.', copyFail:'Could not copy: select it and copy it by hand.',
    learnTitle:'LEARN',
    learnDesc:'NovaLearn, our course platform on technology, AI and automation, is in the works.',
    feat1:'On-demand video courses', feat2:'Blockchain certifications',
    feat3:'AI and automation tutorials', feat4:'Learning community',
    learnSoonTitle:'NovaLearn · Coming soon', learnSoonText:'Leave us your email and we will let you know when it opens.', btnNotify:'Let me know when it opens',
    contactTitle:'CONTACT',
    contactSubtitle:'Do you have a proposal?',
    contactText:'We are open to collaborations and technology proposals. Write to us and we will get back to you.',
    nameLabel:'Name', emailLabel:'Email', msgLabel:'Message', passLabel:'Password',
    errName:'Please enter your name.', errEmail:'Please enter a valid email so we can reply.', errMsg:'Please write your message.',
    btnSend:'Write the email',
    contactNote:'Your email app will open with the message ready to send.',
    successMsg:'Your email app has opened with the message. If it did not, write to us at {email}.',
    loginBrand:'ADMIN PANEL', loginTitle:'Secure access',
    loginSubtitle:'Administrator credentials required',
    userLabel:'Username', btnLogin:'Sign in', loginError:'Wrong username or password.', backToSite:'Back to the site',
    footerCopy:'© 2026 Forzinova. All rights reserved.',
    footerHome:'Home', footerApps:'Apps', footerContact:'Contact', footerAdmin:'Admin',
    menuOpen:'Open the menu', menuClose:'Close the menu', langLabel:'Change language',
  }
};

let currentLang = localStorage.getItem('fnLang') || 'es';

function applyTranslations() {
  const customT = JSON.parse(localStorage.getItem('fnTranslations') || '{}');
  const baseT = TRANSLATIONS[currentLang];
  const t = Object.assign({}, baseT, customT[currentLang] || {});

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (el.innerHTML.includes('<br>') || t[key].includes('<br>')) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  const lbl = document.getElementById('lang-label');
  if(lbl) lbl.textContent = currentLang.toUpperCase();
  const lb = document.getElementById('lang-toggle');
  if (lb) lb.setAttribute('aria-label', t.langLabel);
  actualizarBotonMenu();
  document.documentElement.lang = currentLang;
}

function tr(clave) {
  const customT = JSON.parse(localStorage.getItem('fnTranslations') || '{}');
  const t = Object.assign({}, TRANSLATIONS[currentLang], customT[currentLang] || {});
  return t[clave] !== undefined ? t[clave] : (TRANSLATIONS.es[clave] || '');
}

function toggleLang() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  localStorage.setItem('fnLang', currentLang);
  applyTranslations();
  renderApps();
}

// ════════════════════════════════════════════
// STATE (Database-backed)
// ════════════════════════════════════════════
function setVal(id, v) { const el = document.getElementById(id); if (el && v !== undefined && v !== null) el.value = v; }

// Correo de contacto (de los ajustes del panel); los demás enlaces de correo salen de él
var contactEmail = 'contacto@forzinova.com';
function aplicarCorreo(valor) {
  if (!valor) return;
  contactEmail = String(valor).replace(/^mailto:/i, '').trim() || contactEmail;
  const link = document.getElementById('contact-email-link');
  if (link) link.href = 'mailto:' + contactEmail;
  const txt = document.getElementById('contact-email-text');
  if (txt) txt.textContent = contactEmail;
  const learn = document.getElementById('learn-avisame');
  if (learn) learn.href = 'mailto:' + contactEmail + '?subject=' + encodeURIComponent('Avísame cuando abra NovaLearn');
}

// La web pública se sirve desde GitHub Pages con una copia de los datos (datos.json), que carga
// siempre; después se piden los datos al día a la API del servidor, que puede no responder
// (p. ej. durante los bloqueos de IP de Cloudflare en España). Si no responde, se queda la copia.
function loadState() {
  const publica = document.body.dataset.pagina !== 'admin';
  const copia = publica
    ? fetch('datos.json', { cache: 'no-cache' }).then(r => r.ok ? r.json() : null).then(db => { if (db) aplicarDB(db); }).catch(() => {})
    : Promise.resolve();
  copia.then(() => {
    const opciones = typeof AbortSignal !== 'undefined' && AbortSignal.timeout ? { signal: AbortSignal.timeout(publica ? 4000 : 15000) } : {};
    return fetch(apiBase() + '/api/db', opciones).then(r => r.json()).then(aplicarDB);
  }).catch(e => console.warn('La API no responde; se muestran los datos publicados', e));
  cargarProyectosGuardados();
}

function aplicarDB(db) {
  if (db.apps) {
    APPS_DATA.length = 0;
    db.apps.forEach(a => APPS_DATA.push(a));
    renderApps();
  }
  if (db.settings) {
    const { social, donations, images } = db.settings;
    renderFooterSocial(social);
    if (social) {
      aplicarCorreo(social.email);
      ['email','wa','ig','tk','tw','fb','yt'].forEach(k => setVal('cfg-soc-' + k, social[k]));
    }
    if (donations) {
      const pp = document.getElementById('paypal-link');
      if (pp && donations.paypal) pp.href = donations.paypal;
      const gf = document.getElementById('gofundme-link');
      if (gf && donations.gofundme) gf.href = donations.gofundme;
      const bn = document.getElementById('binance-addr-text');
      if (bn && donations.binance) bn.textContent = donations.binance;
      setVal('cfg-paypal', donations.paypal);
      setVal('cfg-gofundme', donations.gofundme);
      setVal('cfg-binance', donations.binance);
    }
    if (images) {
      setVal('cfg-logo-url', images.logoUrl);
      setVal('cfg-hero-url', images.heroBgUrl);
      if (images.logoUrl) applyLogo(images.logoUrl);
      if (images.heroBgUrl) applyHeroBg(images.heroBgUrl);
    }
  }
  const panel = document.getElementById('admin-panel');
  if (panel && panel.style.display !== 'none') renderAppsConfigList();
}

function cargarProyectosGuardados() {
  const projs = JSON.parse(localStorage.getItem('fnProjects') || 'null');
  if (projs) {
    projs.forEach((p, i) => {
      if (PROJECTS_DATA[i]) {
        PROJECTS_DATA[i].name = p.name;
        PROJECTS_DATA[i].progress = p.progress;
      }
    });
  }
}

function renderFooterSocial(social) {
  const socContainer = document.getElementById('footer-social-links');
  if (!socContainer || !social) return;

  const icons = {
    email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
    wa: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.672 1.433 5.661 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
    ig: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
    tk: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.18-1.3-.22-.1-.42-.21-.62-.33-.08 1.02-.132 2.04-.14 3.06-.03 2.04-.19 4.13-.8 6.04-1.14 3.52-3.93 6.46-7.47 7.39-2.32.65-4.79.43-6.95-.59-2.16-1.02-3.92-2.81-4.88-5.04-.54-1.24-.75-2.58-.75-3.92.05-2.02.6-4.08 1.74-5.74 1.34-1.95 3.5-3.32 5.86-3.75V8.16c-1.24.16-2.42.75-3.23 1.72-.81.97-1.19 2.22-1.12 3.47.07 1.25.66 2.41 1.55 3.25.89.84 2.11 1.28 3.32 1.19a4.015 4.015 0 003.74-4.02c.01-4.52-.02-9.04-.01-13.56.03-.09.06-.21.06-.32z"/></svg>`,
    yt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>`,
    fb: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`,
    tw: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`
  };

  const nombres = { email:'Correo', wa:'WhatsApp', ig:'Instagram', tk:'TikTok', tw:'X (Twitter)', fb:'Facebook', yt:'YouTube' };
  let socHtml = '';
  Object.keys(nombres).forEach(k => {
    if (!social[k]) return;
    const href = k === 'email' ? 'mailto:' + String(social.email).replace(/^mailto:/i, '') : social[k];
    const ext = k === 'email' ? '' : ' target="_blank" rel="noopener"';
    socHtml += `<a href="${href}"${ext} class="soc-link ${k}" aria-label="${nombres[k]}">${icons[k]}</a>`;
  });
  socContainer.innerHTML = socHtml;
}

function applyLogo(url) {
  document.querySelectorAll('.logo-spinner').forEach(spinner => {
    const svg = spinner.querySelector('svg');
    if (svg) svg.style.display = 'none';
    let img = spinner.querySelector('img.custom-logo');
    if (!img) {
      img = document.createElement('img');
      img.className = 'custom-logo';
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'contain';
      spinner.appendChild(img);
    }
    img.src = url;
    img.style.display = 'block';
  });
}

function applyHeroBg(url) {
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    heroBg.style.backgroundImage = `url('${url}')`;
    heroBg.style.backgroundSize = 'cover';
    heroBg.style.backgroundPosition = 'center';
  }
}

// ════════════════════════════════════════════
// ARRANQUE: la web se ve sin esperas ni clics (antes había una pantalla de carga obligatoria)
// ════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  enlazarEtiquetas();
  if (document.body.dataset.pagina === 'admin') iniciarAdmin();
  else showMainSite();
});

function showMainSite() {
  loadState();
  renderApps();
  renderProjects();
  initNavbar();
  applyTranslations();
}

// Etiquetas sin «for»: se enlazan con el campo de su grupo
function enlazarEtiquetas() {
  document.querySelectorAll('.form-group').forEach(g => {
    const lab = g.querySelector('label:not([for])');
    const campo = g.querySelector('input, select, textarea');
    if (lab && campo && campo.id) lab.setAttribute('for', campo.id);
  });
}

// ════════════════════════════════════════════
// NAVBAR
// ════════════════════════════════════════════
function initNavbar() {
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    if (window.scrollY > 20) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });
}

function actualizarBotonMenu() {
  const menu = document.getElementById('nav-menu'), b = document.getElementById('nav-hamburger');
  if (!menu || !b) return;
  const abierto = menu.classList.contains('open');
  b.setAttribute('aria-expanded', abierto ? 'true' : 'false');
  b.setAttribute('aria-label', tr(abierto ? 'menuClose' : 'menuOpen'));
}

function toggleMobileMenu() {
  const menu = document.getElementById('nav-menu');
  if (!menu) return;
  menu.classList.toggle('open');
  actualizarBotonMenu();
}

function cerrarMenu() {
  const menu = document.getElementById('nav-menu');
  if (menu) menu.classList.remove('open');
  actualizarBotonMenu();
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  cerrarMenu();
}

// Al elegir una sección en el menú móvil se cierra; con Escape también
document.addEventListener('click', e => { if (e.target.closest && e.target.closest('#nav-menu a')) cerrarMenu(); });
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  const menu = document.getElementById('nav-menu');
  if (menu && menu.classList.contains('open')) { cerrarMenu(); document.getElementById('nav-hamburger').focus(); }
});

// ════════════════════════════════════════════
// RENDER APPS
// ════════════════════════════════════════════
const ICONOS_APPS = {
  tarot:   '<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/><path d="M16 3.5l.7 1.6 1.6.7-1.6.7-.7 1.6-.7-1.6-1.6-.7 1.6-.7z"/>',
  astro:   '<path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7z"/>',
  ventas:  '<path d="M3 20h18"/><path d="M5 16l4-5 4 3 6-8"/><path d="M15 6h4v4"/>',
  hogar:   '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
  it:      '<rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><path d="M7 7h.01M7 17h.01"/>',
  trading: '<path d="M6 4v16M12 7v13M18 3v14"/><rect x="4" y="8" width="4" height="7"/><rect x="10" y="10" width="4" height="5"/><rect x="16" y="5" width="4" height="6"/>'
};
// Icono dibujado por app; las que se creen desde el panel sin icono propio llevan su inicial
function iconoApp(app) {
  const trazos = ICONOS_APPS[app.id];
  if (trazos) return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${trazos}</svg>`;
  const inicial = String(app.title || '?').replace(/^app\s+/i, '').charAt(0).toUpperCase();
  return `<span class="app-inicial" aria-hidden="true">${inicial}</span>`;
}

function renderApps() {
  const grid = document.getElementById('apps-grid');
  if (!grid) return;
  grid.innerHTML = '';

  APPS_DATA.forEach(app => {
    const pct = app.progress;
    const enCurso = pct === null || pct === undefined;
    const progressHTML = `<div class="app-progress-wrap">
         <div class="app-progress-header">
           <span class="app-progress-label">${tr('appProgress')}</span>
           <span class="app-progress-pct">${enCurso ? tr('appInDev') : pct + '%'}</span>
         </div>
         <div class="app-progress-bar" role="progressbar" aria-label="${tr('appProgress')}: ${app.title}" aria-valuemin="0" aria-valuemax="100"${enCurso ? '' : ` aria-valuenow="${pct}"`}>
           <div class="app-progress-fill ${app.color}" style="width:${enCurso ? 3 : pct}%"></div>
         </div>
       </div>`;
    const imgHTML = app.image ? `<div class="app-preview"><img src="${app.image}" alt="" loading="lazy"></div>` : '';

    const card = document.createElement('article');
    card.className = 'app-card';
    card.setAttribute('role', 'listitem');
    card.innerHTML = `
      ${imgHTML}
      <div class="app-card-icon">${iconoApp(app)}</div>
      <h3 class="app-card-title">${app.title}</h3>
      <p class="app-card-desc">${app.desc}</p>
      ${progressHTML}
      <div class="app-card-footer">
        <button type="button" class="btn-app ${app.btn}" onclick="handleAppBtn('${app.id}', this)">${app.btnText}</button>
      </div>
      <p class="app-aviso" role="status"></p>
    `;
    grid.appendChild(card);
  });
}

// Las apps aún no están disponibles: el aviso aparece en la propia tarjeta (antes, un alert)
function handleAppBtn(id, boton) {
  const app = APPS_DATA.find(a => a.id === id);
  if (!app || app.showAlert === false) return;
  const aviso = boton && boton.closest('.app-card').querySelector('.app-aviso');
  if (aviso) aviso.textContent = tr('appSoon');
}

// ════════════════════════════════════════════
// RENDER PROJECTS
// ════════════════════════════════════════════
function renderProjects() {
  const list = document.getElementById('projects-list');
  if (!list) return;
  list.innerHTML = '';

  PROJECTS_DATA.forEach((proj, i) => {
    const item = document.createElement('li');
    item.className = 'project-item';
    item.style.animationDelay = (i * 0.1) + 's';
    item.innerHTML = `
      <div class="project-info">
        <div class="project-name">${proj.name}</div>
        <div class="project-bar" role="progressbar" aria-label="${proj.name}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${proj.progress}">
          <div class="project-bar-fill" style="width:${proj.progress}%"></div>
        </div>
      </div>
      <div class="project-pct">${proj.progress}%</div>
    `;
    list.appendChild(item);
  });
}

// ════════════════════════════════════════════
// INVEST
// ════════════════════════════════════════════
var focoAntesBinance = null;
function showBinanceQR() {
  const m = document.getElementById('binance-modal');
  focoAntesBinance = document.activeElement;
  m.hidden = false;
  document.getElementById('binance-estado').textContent = '';
  document.getElementById('binance-copiar').focus();
}
function hideBinanceQR() {
  document.getElementById('binance-modal').hidden = true;
  if (focoAntesBinance) focoAntesBinance.focus();
}
function copyBinance() {
  const dir = document.getElementById('binance-addr-text').textContent.trim();
  const estado = document.getElementById('binance-estado');
  (navigator.clipboard ? navigator.clipboard.writeText(dir) : Promise.reject())
    .then(() => { estado.textContent = tr('copied'); })
    .catch(() => { estado.textContent = tr('copyFail'); });
}
document.addEventListener('keydown', e => {
  const m = document.getElementById('binance-modal');
  if (e.key === 'Escape' && m && !m.hidden) hideBinanceQR();
});

// ════════════════════════════════════════════
// CONTACT FORM
// ════════════════════════════════════════════
// No hay servicio de correo en el servidor: el formulario prepara el mensaje en el programa de correo
// del visitante (antes simulaba el envío y el mensaje se perdía)
function submitContact(e) {
  e.preventDefault();
  const campos = [['c-name','e-c-name'], ['c-email','e-c-email'], ['c-msg','e-c-msg']];
  let primero = null;
  campos.forEach(([id, err]) => {
    const el = document.getElementById(id);
    const malo = !el.value.trim() || !el.checkValidity();
    el.setAttribute('aria-invalid', malo ? 'true' : 'false');
    document.getElementById(err).hidden = !malo;
    if (malo && !primero) primero = el;
  });
  const ok = document.getElementById('contact-success');
  if (primero) { ok.textContent = ''; primero.focus(); return; }
  const nombre = document.getElementById('c-name').value.trim();
  const correo = document.getElementById('c-email').value.trim();
  const msg = document.getElementById('c-msg').value.trim();
  const asunto = 'Propuesta para Forzinova de ' + nombre;
  const cuerpo = msg + '\n\n— ' + nombre + ' (' + correo + ')';
  window.location.href = 'mailto:' + contactEmail + '?subject=' + encodeURIComponent(asunto) + '&body=' + encodeURIComponent(cuerpo);
  ok.textContent = tr('successMsg').replace('{email}', contactEmail);
}
// Tras un error, cada campo se revisa al corregirlo
document.addEventListener('input', e => {
  const el = e.target;
  if (el.getAttribute && el.getAttribute('aria-invalid') === 'true' && el.value.trim() && el.checkValidity()) {
    el.setAttribute('aria-invalid', 'false');
    const err = document.getElementById('e-' + el.id);
    if (err) err.hidden = true;
  }
});

// ════════════════════════════════════════════
// ADMIN LOGIN
// ════════════════════════════════════════════
// Las credenciales se validan en el servidor (/api/login).
// La sesión es un token firmado que caduca a las 8 h y vive solo en esta pestaña.
var adminToken = null;
var adminUsers = [];
var adminMaster = '';

// Versiones anteriores guardaban usuarios y contraseñas en texto plano en el navegador
try { localStorage.removeItem('fnAdminUsers'); } catch(e) {}
try { adminToken = sessionStorage.getItem('fnAdminToken'); } catch(e) {}

// La API vive en el servidor propio; la web (GitHub Pages) está en forzinova.com
function apiBase() {
  const h = window.location.hostname;
  if (h === 'localhost' && window.location.port !== '3000') return 'http://localhost:3000';
  if (h === 'forzinova.com' || h === 'www.forzinova.com') return 'https://apidev.forzinova.com';
  return '';
}

// admin.html: si ya hay sesión en esta pestaña se abre el panel; el servidor la valida en la primera petición
function iniciarAdmin() {
  applyTranslations();
  if (adminToken) { let u = null; try { u = sessionStorage.getItem('fnAdminUser'); } catch(e) {} mostrarPanelAdmin(u); }
  else { const u = document.getElementById('admin-user'); if (u) u.focus(); }
}

function mostrarPanelAdmin(usuario) {
  const acceso = document.getElementById('contenido');
  if (acceso) acceso.hidden = true;
  const panel = document.getElementById('admin-panel');
  if (panel) { panel.style.display = 'flex'; panel.classList.add('fade-enter'); }
  const nameEl = document.getElementById('admin-username-display');
  if (nameEl && usuario) nameEl.textContent = usuario;
  loadState();
  loadAdminData();
  loadAdminUsers();
}

// fetch con la sesión de administrador; si caduca, cierra el panel
function adminFetch(path, options) {
  options = options || {};
  options.headers = Object.assign({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + adminToken }, options.headers || {});
  return fetch(apiBase() + path, options).then(function(res) {
    if (res.status === 401) {
      alert('Tu sesión ha caducado. Vuelve a iniciar sesión.');
      adminLogout();
      throw new Error('No autorizado');
    }
    return res.json().then(function(body) {
      if (!res.ok) throw new Error(body.error || ('Error ' + res.status));
      return body;
    });
  });
}

function showLoginError(msg) {
  var errEl  = document.getElementById('login-error');
  var passEl = document.getElementById('admin-pass');
  if (errEl) {
    errEl.textContent = msg || tr('loginError');
    errEl.hidden = false;
  }
  if (passEl) {
    passEl.style.borderColor = '#f87171';
    passEl.value = '';
    passEl.focus();
    setTimeout(function(){ passEl.style.borderColor = ''; }, 2000);
  }
}

function adminLogin() {
  var userEl  = document.getElementById('admin-user');
  var passEl  = document.getElementById('admin-pass');
  var errEl   = document.getElementById('login-error');
  if (!userEl || !passEl) return;

  var user = userEl.value.trim();
  var pass = passEl.value;
  if (!user || !pass) { showLoginError(); return; }

  fetch(apiBase() + '/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: user, password: pass })
  })
  .then(function(res) { return res.json().then(function(body) { return { ok: res.ok, body: body }; }); })
  .then(function(r) {
    if (!r.ok || !r.body.token) { showLoginError(r.body.error); return; }
    adminToken = r.body.token;
    try { sessionStorage.setItem('fnAdminToken', adminToken); } catch(e) {}
    passEl.value = '';
    if (errEl) errEl.hidden = true;
    try { sessionStorage.setItem('fnAdminUser', r.body.username); } catch(e) {}
    mostrarPanelAdmin(r.body.username);
  })
  .catch(function(e) {
    console.error(e);
    showLoginError('No se pudo conectar con el servidor.');
  });
}

function adminLogout() {
  adminToken = null;
  try { sessionStorage.removeItem('fnAdminToken'); } catch(e) {}
  try { sessionStorage.removeItem('fnAdminUser'); } catch(e) {}
  var panel = document.getElementById('admin-panel');
  var acceso = document.getElementById('contenido');
  if (panel) panel.style.display = 'none';
  if (acceso) acceso.hidden = false;
  var u = document.getElementById('admin-user');
  var p = document.getElementById('admin-pass');
  if (u) { u.value = ''; u.focus(); }
  if (p) p.value = '';
}

// ════════════════════════════════════════════
// ADMIN TABS
// ════════════════════════════════════════════
function showAdminTab(name) {
  document.querySelectorAll('.admin-tab').forEach(t => t.style.display = 'none');
  document.querySelectorAll('.admin-nav-item').forEach(a => a.classList.remove('active'));
  const tab = document.getElementById('tab-' + name);
  if (tab) tab.style.display = 'block';
  const tabMap = { dashboard:0, content:1, design:2, 'projects-config':3, 'apps-config':4, 'donate-config':5, users:6 };
  const items = document.querySelectorAll('.admin-nav-item');
  const idx = tabMap[name];
  if (idx !== undefined && items[idx]) items[idx].classList.add('active');
}

// ════════════════════════════════════════════
// ADMIN: CONTENT EDITOR
// ════════════════════════════════════════════
function loadAdminData() {
  // Generate Dynamic Content Editor
  const editor = document.getElementById('dynamic-content-editor');
  if (editor) {
    editor.innerHTML = '';
    const customT = JSON.parse(localStorage.getItem('fnTranslations') || '{}');
    const baseT = TRANSLATIONS[currentLang];
    const t = Object.assign({}, baseT, customT[currentLang] || {});
    
    const section = document.createElement('div');
    section.className = 'editor-section';
    
    for (const key in baseT) {
      const isLong = baseT[key].length > 50 || baseT[key].includes('<br>');
      const val = t[key] || "";
      const inputHtml = isLong 
        ? `<textarea class="form-input" id="ed-text-${key}" rows="3">${val.replace(/<br>/g, '\\n')}</textarea>`
        : `<input type="text" class="form-input" id="ed-text-${key}" value="${val}"/>`;
        
      section.innerHTML += `
        <div class="form-group" style="margin-bottom:1rem;">
          <label style="text-transform:capitalize;">${key}</label>
          ${inputHtml}
        </div>
      `;
    }
    editor.appendChild(section);
  }

  // Apps config
  renderAppsConfigList();
  // Projects config
  renderProjectsConfigList();
}

function saveContent() {
  const customT = JSON.parse(localStorage.getItem('fnTranslations') || '{}');
  if (!customT[currentLang]) customT[currentLang] = {};
  
  const baseT = TRANSLATIONS[currentLang];
  for (const key in baseT) {
    const el = document.getElementById(`ed-text-${key}`);
    if (el) {
      customT[currentLang][key] = el.value.replace(/\\n/g, '<br>');
    }
  }
  localStorage.setItem('fnTranslations', JSON.stringify(customT));
  
  applyTranslations(); // reload live site

  const msg = document.getElementById('content-save-msg');
  msg.style.display = 'block';
  setTimeout(() => { msg.style.display = 'none'; }, 3000);
}

function saveDesign() {
  const images = {
    logoUrl: document.getElementById('cfg-logo-url').value,
    heroBgUrl: document.getElementById('cfg-hero-url').value
  };
  const social = {
    email: document.getElementById('cfg-soc-email').value,
    wa: document.getElementById('cfg-soc-wa').value,
    ig: document.getElementById('cfg-soc-ig').value,
    tk: document.getElementById('cfg-soc-tk').value,
    tw: document.getElementById('cfg-soc-tw').value,
    fb: document.getElementById('cfg-soc-fb').value,
    yt: document.getElementById('cfg-soc-yt').value
  };

  syncSettingsToBackend({ social, images });

  applyLogo(images.logoUrl);
  applyHeroBg(images.heroBgUrl);
  renderFooterSocial(social);

  const msg = document.getElementById('design-save-msg');
  msg.style.display = 'block';
  setTimeout(() => { msg.style.display = 'none'; }, 3000);
}

function renderProjectsConfigList() {
  const list = document.getElementById('projects-config-list');
  if (!list) return;
  list.innerHTML = '';
  PROJECTS_DATA.forEach((proj, i) => {
    const item = document.createElement('div');
    item.className = 'app-config-item';
    item.innerHTML = `
      <div class="form-row" style="margin-bottom:1rem;">
        <div class="form-group" style="flex:2;">
          <label>Nombre del Proyecto</label>
          <input type="text" class="form-input" id="cfg-proj-name-${i}" value="${proj.name}"/>
        </div>
        <div class="form-group" style="flex:1;">
          <label>Progreso (%)</label>
          <input type="number" class="form-input" id="cfg-proj-pct-${i}" min="0" max="100" value="${proj.progress}"/>
        </div>
      </div>
    `;
    list.appendChild(item);
  });
}

function saveProjectsConfig() {
  const projs = [];
  PROJECTS_DATA.forEach((proj, i) => {
    const nameEl = document.getElementById(`cfg-proj-name-${i}`);
    const pctEl = document.getElementById(`cfg-proj-pct-${i}`);
    if (nameEl && pctEl) {
      projs.push({ name: nameEl.value, progress: parseInt(pctEl.value) || 0 });
    }
  });
  localStorage.setItem('fnProjects', JSON.stringify(projs));
  loadState(); // update PROJECTS_DATA
  renderProjects(); // re-render site
  const msg = document.getElementById('projects-save-msg');
  msg.style.display = 'block';
  setTimeout(() => { msg.style.display = 'none'; }, 3000);
}

// ════════════════════════════════════════════
// ADMIN: APPS CONFIG
// ════════════════════════════════════════════
function renderAppsConfigList() {
  const list = document.getElementById('apps-config-list');
  if (!list) return;
  list.innerHTML = '';
  APPS_DATA.forEach(app => {
    const item = document.createElement('div');
    item.className = 'app-config-item';
    item.style.border = "1px solid rgba(255,255,255,0.1)";
    item.style.padding = "1rem";
    item.style.marginBottom = "1rem";
    item.style.borderRadius = "8px";
    
    item.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
        <div class="app-config-title" style="font-weight:bold; color:var(--gold);">${app.icon} ${app.title}</div>
        <button onclick="deleteApp('${app.id}')" style="background:none; border:1px solid #f87171; color:#f87171; border-radius:4px; padding:2px 8px; cursor:pointer; font-size:0.75rem;">Eliminar ✕</button>
      </div>
      <div class="form-row">
        <div class="form-group" style="flex:1;">
          <label>Progreso (%)</label>
          <input type="number" class="form-input" id="cfg-app-${app.id}" 
            min="0" max="100" value="${app.progress !== null ? app.progress : ''}" 
            placeholder="0-100"/>
        </div>
        <div class="form-group" style="flex:1; display:flex; align-items:center; gap:10px; margin-top:1.5rem;">
          <input type="checkbox" id="cfg-alert-${app.id}" ${app.showAlert !== false ? 'checked' : ''} style="width:20px; height:20px; cursor:pointer;">
          <label for="cfg-alert-${app.id}" style="margin:0; cursor:pointer;">Mostrar Popup</label>
        </div>
      </div>
      <div class="form-group" style="margin-top:10px;">
        <label>URL de Imagen Preview (Opcional)</label>
        <input type="url" class="form-input" id="cfg-img-${app.id}" 
          value="${app.image || ''}" placeholder="https://..."/>
      </div>
    `;
    list.appendChild(item);
  });
}

function saveAppsConfig() {
  APPS_DATA.forEach(app => {
    const pctEl = document.getElementById('cfg-app-' + app.id);
    const imgEl = document.getElementById('cfg-img-' + app.id);
    const alertEl = document.getElementById('cfg-alert-' + app.id);
    
    if (pctEl) {
      const val = pctEl.value;
      app.progress = val === '' ? null : Math.min(100, Math.max(0, parseInt(val)));
    }
    if (imgEl) app.image = imgEl.value;
    if (alertEl) app.showAlert = alertEl.checked;
  });
  
  syncAppsToBackend();
}

function syncAppsToBackend() {
  adminFetch('/api/apps', {
    method: 'POST',
    body: JSON.stringify(APPS_DATA)
  })
  .then(() => {
    renderApps(); // re-render site
    const msg = document.getElementById('apps-save-msg');
    if(msg) {
      msg.style.display = 'block';
      setTimeout(() => { msg.style.display = 'none'; }, 3000);
    }
  })
  .catch(e => {
    console.error(e);
    if (e.message !== 'No autorizado') alert('Error sincronizando con el backend: ' + e.message);
  });
}

function addNewApp() {
  const id = document.getElementById('new-app-id').value.trim();
  const icon = document.getElementById('new-app-icon').value.trim() || '🚀';
  const title = document.getElementById('new-app-title').value.trim();
  const desc = document.getElementById('new-app-desc').value.trim();
  const color = document.getElementById('new-app-color').value;
  const btnText = document.getElementById('new-app-btn-text').value.trim() || 'EXPLORAR';
  const progress = parseInt(document.getElementById('new-app-progress').value);

  if (!id || !title) {
    alert("Por favor ingresa ID y Título");
    return;
  }

  if (APPS_DATA.some(a => a.id === id)) {
    alert("Este ID de app ya existe. Usa uno diferente.");
    return;
  }

  const newApp = {
    id, icon, title, desc, color, 
    btnText, 
    btn: 'explore', 
    progress: isNaN(progress) ? 0 : progress,
    image: '',
    showAlert: true
  };

  APPS_DATA.push(newApp);
  
  // Clear inputs
  document.getElementById('new-app-id').value = '';
  document.getElementById('new-app-title').value = '';
  document.getElementById('new-app-desc').value = '';
  
  syncAppsToBackend();
  renderAppsConfigList();
}

function deleteApp(id) {
  if (!confirm(`¿Estás seguro de eliminar la app "${id}"?`)) return;
  const idx = APPS_DATA.findIndex(a => a.id === id);
  if (idx !== -1) {
    APPS_DATA.splice(idx, 1);
    syncAppsToBackend();
    renderAppsConfigList();
  }
}

// ════════════════════════════════════════════
// ADMIN: DONATIONS CONFIG
// ════════════════════════════════════════════
function saveDonations() {
  const donations = {
    paypal:   document.getElementById('cfg-paypal').value,
    gofundme: document.getElementById('cfg-gofundme').value,
    binance:  document.getElementById('cfg-binance').value,
  };
  
  syncSettingsToBackend({ donations });

  // Apply live
  if (donations.paypal) {
    const el = document.getElementById('paypal-link');
    if (el) el.href = donations.paypal;
  }
  if (donations.gofundme) {
    const el = document.getElementById('gofundme-link');
    if (el) el.href = donations.gofundme;
  }
  if (donations.binance) {
    const el = document.getElementById('binance-addr-text');
    if (el) el.textContent = donations.binance;
  }
  const msg = document.getElementById('donate-save-msg');
  msg.style.display = 'block';
  setTimeout(() => { msg.style.display = 'none'; }, 3000);
}

function syncSettingsToBackend(settings) {
  adminFetch('/api/settings', {
    method: 'POST',
    body: JSON.stringify(settings)
  })
  .catch(e => {
    console.error("Error sincronizando settings", e);
    if (e.message !== 'No autorizado') alert('Error guardando ajustes: ' + e.message);
  });
}

// ════════════════════════════════════════════
// ADMIN: USER MANAGEMENT
// ════════════════════════════════════════════
// Los administradores adicionales se guardan en el servidor, con la contraseña hasheada
function loadAdminUsers() {
  adminFetch('/api/admin/users')
    .then(data => {
      adminMaster = data.master;
      adminUsers = data.users;
      renderAdminUsers();
    })
    .catch(e => console.error('Error cargando usuarios', e));
}

function renderAdminUsers() {
  const list = document.getElementById('users-list');
  if (!list) return;
  // Keep master row, remove extras
  while (list.children.length > 1) list.removeChild(list.lastChild);
  const masterName = list.querySelector('.user-row.master strong');
  if (masterName && adminMaster) masterName.textContent = adminMaster;
  adminUsers.forEach(username => {
    const row = document.createElement('div');
    row.className = 'user-row';
    row.innerHTML = `
      <div class="user-avatar"></div>
      <div class="user-info"><strong></strong><span>Admin</span></div>
      <button style="background:none;border:1px solid rgba(248,113,113,0.4);border-radius:6px;color:#f87171;padding:6px 12px;cursor:pointer;font-size:0.75rem;">✕ Eliminar</button>
    `;
    // textContent: el nombre nunca se interpreta como HTML
    row.querySelector('.user-avatar').textContent = username.slice(0,2).toUpperCase();
    row.querySelector('strong').textContent = username;
    row.querySelector('button').addEventListener('click', () => deleteUser(username));
    list.appendChild(row);
  });

  const form = document.getElementById('create-user-form');
  if (adminUsers.length >= 5) {
    form.style.opacity = '0.5';
    form.querySelector('button').disabled = true;
    form.querySelector('button').textContent = 'Límite de 5 admins alcanzado';
  } else {
    form.style.opacity = '1';
    form.querySelector('button').disabled = false;
    form.querySelector('button').textContent = '➕ Crear Usuario';
  }
  document.getElementById('stat-users').textContent = 1 + adminUsers.length;
}

function createUser() {
  if (adminUsers.length >= 5) {
    showUserError('Límite de 5 administradores adicionales alcanzado.');
    return;
  }
  const username = document.getElementById('new-username').value.trim();
  const password = document.getElementById('new-password').value;
  if (!username || !password) { showUserError('Completa ambos campos.'); return; }
  if (password.length < 10) { showUserError('La contraseña debe tener al menos 10 caracteres.'); return; }
  adminFetch('/api/admin/users', {
    method: 'POST',
    body: JSON.stringify({ username, password })
  })
  .then(() => {
    document.getElementById('new-username').value = '';
    document.getElementById('new-password').value = '';
    document.getElementById('user-error').style.display = 'none';
    loadAdminUsers();
  })
  .catch(e => { if (e.message !== 'No autorizado') showUserError(e.message); });
}

function deleteUser(username) {
  if (!confirm('¿Eliminar este usuario administrador?')) return;
  adminFetch('/api/admin/users/' + encodeURIComponent(username), { method: 'DELETE' })
    .then(() => loadAdminUsers())
    .catch(e => { if (e.message !== 'No autorizado') showUserError(e.message); });
}

function showUserError(msg) {
  const el = document.getElementById('user-error');
  el.textContent = '⚠ ' + msg;
  el.style.display = 'block';
  setTimeout(() => { el.style.display = 'none'; }, 3000);
}
