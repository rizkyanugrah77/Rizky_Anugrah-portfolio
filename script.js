document.documentElement.classList.add('js');

const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('#mobile-menu');

function updateHeader() {
  header.classList.toggle('scrolled', window.scrollY > 12);
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  mobileMenu.hidden = open;
  mobileMenu.classList.toggle('open', !open);
  menuButton.querySelector('.material-symbols-rounded').textContent = open ? 'menu' : 'close';
  menuButton.lastElementChild.textContent = open ? 'Menu' : 'Close';
});

mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mobileMenu.hidden = true;
  mobileMenu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('.material-symbols-rounded').textContent = 'menu';
  menuButton.lastElementChild.textContent = 'Menu';
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    status.textContent = 'Please complete each field with a valid email address.';
    form.reportValidity();
    return;
  }
  const data = new FormData(form);
  const text = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nSubject: ${data.get('subject')}\n\n${data.get('message')}`;
  status.textContent = 'Opening WhatsApp with your message.';
  window.open(`https://wa.me/6282162008433?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  form.reset();
});
