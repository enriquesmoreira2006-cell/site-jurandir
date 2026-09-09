const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => menu.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();
