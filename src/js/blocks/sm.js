//
// Дубли кода уберу
//
// side-menu
//
const showSmS = document.querySelector('.round-button--burger--s');
const showSmMd = document.querySelector('.round-button--burger--md');
const hideButtonSm = document.querySelector('.round-button--cross--sm');
const sideMenu = document.querySelector('.sm-wrapper');
const sm = document.querySelector('.sm');
const overlaySm = document.querySelector('.overlay--sm');

showSmS.addEventListener('click', () => {
  sideMenu.classList.add('modal-wrapper--show');
  document.body.classList.add('scroll-lock');
  sm.classList.add('modal-wrapper--show');
});

showSmMd.addEventListener('click', () => {
  sideMenu.classList.add('modal-wrapper--show');
  document.body.classList.add('scroll-lock');
  sm.classList.add('modal-wrapper--show');
});

hideButtonSm.addEventListener('click', () => {
  sideMenu.classList.remove('modal-wrapper--show');
  document.body.classList.remove('scroll-lock');
  sm.classList.remove('modal-wrapper--show');
});

overlaySm.addEventListener('click', (evt) => {
  if (evt.target === overlaySm) {
    sideMenu.classList.remove('modal-wrapper--show');
    document.body.classList.remove('scroll-lock');
    sm.classList.remove('modal-wrapper--show');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1366) {
    sideMenu.classList.remove('modal-wrapper--show');
    document.body.classList.remove('scroll-lock');
    sm.classList.remove('modal-wrapper--show');
  }
});