// const menuToggle = document.querySelector('.menu-toggle');
// const navLinks = document.querySelector('.nav-links');

// menuToggle.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });

// document.querySelectorAll('.nav-links a').forEach(link => {
//   link.addEventListener('click', () => {
//     navLinks.classList.remove('active');
//   });
// });

// document.getElementById('contactForm').addEventListener('submit', function(e) {
//   e.preventDefault();
//   alert('Thank you! Your message has been sent.');
//   this.reset();
// });

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  this.reset();
});
