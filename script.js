// Navigation menu toggle on mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // Close menu on mobile after click
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
});

// Inspire button bounce effect and smooth scroll
const inspireBtn = document.getElementById('inspireBtn');
inspireBtn.addEventListener('click', () => {
  inspireBtn.style.transform = 'scale(0.95)';
  setTimeout(() => {
    inspireBtn.style.transform = 'scale(1)';
  }, 150);
  document.getElementById('experiences').scrollIntoView({ behavior: 'smooth' });
});

// Contact form submission feedback (basic)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  contactForm.reset();
});
