// script.js
const darkModeToggle = document.getElementById('bd-theme');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
