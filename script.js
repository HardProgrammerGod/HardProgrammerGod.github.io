// scroll
document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // валідація форми
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Будь ласка, заповніть всі поля!');
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Введіть коректний email!');
        return;
    }

    const responseMessage = document.getElementById('form-response');
    responseMessage.style.display = 'block';  
    form.reset();  
});
  
  // modal вікно
  const modal = document.getElementById('modal');
  const modalBtn = document.getElementById('modal-btn');
  const closeBtn = document.querySelector('.close-btn');
  
  modalBtn.addEventListener('click', () => {
    modal.classList.add('visible');
  });
  
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('visible');
  });
  
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('visible');
    }
  });
  
  // слайдер відгуків
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  let currentSlide = 0;
  
  function updateSlides() {
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentSlide);
    });
  }
  
  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
  });
  
  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
  });
  
  updateSlides();
  
  // анімація при скролі
  const sections = document.querySelectorAll('section');
  
  function revealSections() {
    const triggerPoint = window.innerHeight / 1.2;
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerPoint) {
        section.classList.add('section-visible');
      } else {
        section.classList.remove('section-visible');
      }
    });
  }
  
  window.addEventListener('scroll', revealSections);
  
  sections.forEach((section) => section.classList.add('section-hidden'));
  
