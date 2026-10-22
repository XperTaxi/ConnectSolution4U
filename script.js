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

// Quote form: sends the request to the business email through Web3Forms.
const form = document.getElementById('quote-form');
const note = document.getElementById('form-note');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const data = new FormData(form);
  data.set('subject', 'Quote request: ' + data.get('service'));
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  note.className = '';
  note.textContent = '';
  try {
    const res = await fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
    const json = await res.json();
    if (res.ok && json.success) {
      form.reset();
      note.className = 'ok';
      note.textContent = 'Thanks, your request was sent. We will reply within one business day.';
    } else {
      throw new Error(json.message || 'Request failed');
    }
  } catch (err) {
    note.className = 'error';
    note.textContent = 'Your request did not send. Please call +1 (506) 503-2012 or email 4Uconnectsolutions@gmail.com.';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send request';
  }
});
