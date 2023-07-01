'strict mode';

const burgerMenu = document.querySelector('.menu');
const closeBtn = document.querySelector('.closemenu');
const show = document.querySelector('.dropmenu');
const overlay = document.querySelector('.overlay');

burgerMenu.addEventListener('click', function () {
  show.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

closeBtn.addEventListener('click', function () {
  show.classList.add('hidden');
  overlay.classList.add('hidden');
});
