// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', e => { if (e.target.tagName === 'A') nav.classList.remove('open'); });

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Quote form: opens the visitor's email app with the details filled in.
const BUSINESS_EMAIL = '4Uconnectsolutions@gmail.com';

document.getElementById('quote-form').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const subject = `Quote request: ${f.get('service')}`;
  const body = `Name: ${f.get('name')}\nEmail: ${f.get('email')}\nPhone: ${f.get('phone')}\n\n${f.get('message')}`;
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById('form-note').textContent = 'Opening your email app. If nothing happens, email ' + BUSINESS_EMAIL + ' directly.';
});
