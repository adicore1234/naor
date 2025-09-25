const navbar = document.querySelector('.navbar');
const toggle = document.querySelector('.nav-toggle');

if (toggle && navbar) {
  toggle.addEventListener('click', () => {
    const isOpen = navbar.getAttribute('data-open') === 'true';
    navbar.setAttribute('data-open', String(!isOpen));
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });
}

const links = document.querySelectorAll('.nav-links a, .nav-cta a');
links.forEach((link) =>
  link.addEventListener('click', () => {
    navbar.setAttribute('data-open', 'false');
    toggle.setAttribute('aria-expanded', 'false');
  })
);
