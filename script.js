// NAV SCROLL
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (nav && window.scrollY > 40) nav.classList.add('scrolled');
  else if (nav) nav.classList.remove('scrolled');
});

// INTERSECTION OBSERVER
function initObserver() {
  setTimeout(() => {
    const els = document.querySelectorAll('.fade-in:not(.visible)');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { 
          e.target.classList.add('visible'); 
          observer.unobserve(e.target); 
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => observer.observe(el));
  }, 100);
}

function initMobileNav() {
  const nav = document.getElementById('mainNav');
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!nav || !toggle || !navLinks) {
    return;
  }

  const setOpen = (isOpen) => {
    nav.classList.toggle('nav-open', isOpen);
    document.body.classList.toggle('nav-open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  };

  toggle.addEventListener('click', () => {
    setOpen(!nav.classList.contains('nav-open'));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      setOpen(false);
    }
  });
}

// FORM SUBMIT
function submitForm(event) {
  if (event && typeof event.preventDefault === 'function') {
    event.preventDefault();
  }

  const form = document.getElementById('contactForm');
  const fnameInput = document.getElementById('fname');
  const emailInput = document.getElementById('email');
  const serviceInput = document.getElementById('service');
  const successMsg = document.getElementById('successMsg');

  if (!fnameInput || !emailInput || !serviceInput) {
    return;
  }

  const fname = fnameInput.value.trim();
  const email = emailInput.value.trim();
  const service = serviceInput.value;

  if (!fname || !email || !service) {
    alert('Please fill in your name, email, and the service required.');
    return;
  }

  if (successMsg) {
    successMsg.style.display = 'block';
  }

  if (form) {
    form.reset();
  }

  setTimeout(() => {
    if (successMsg) {
      successMsg.style.display = 'none';
    }
  }, 5000);
}

// INIT
window.addEventListener('DOMContentLoaded', () => {
  initObserver();
  initMobileNav();
});
window.addEventListener('load', initObserver);
