const navbar = document.querySelector('.navbar');
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-links a, .nav-cta a');
const yearSpan = document.getElementById('year');

if (toggle && navbar) {
  toggle.addEventListener('click', () => {
    const isOpen = navbar.getAttribute('data-open') === 'true';
    navbar.setAttribute('data-open', String(!isOpen));
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (!navbar) return;
    navbar.setAttribute('data-open', 'false');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

const observerTargets = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  observerTargets.forEach((target) => observer.observe(target));
} else {
  observerTargets.forEach((target) => target.classList.add('in-view'));
}

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 40;
  document.querySelector('.site-header')?.setAttribute('data-scrolled', String(scrolled));
});
