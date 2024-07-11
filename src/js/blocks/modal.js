//
// Дубли кода уберу
//
//
// Модальные окна
//
const modalCall = document.querySelector('.modal-wrapper--call');
const overlayCall = document.querySelector('.overlay--call');

const modalFeedback = document.querySelector('.modal-wrapper--feedback');
const overlayFeedback = document.querySelector('.overlay--feedback');

const callSmButton = document.querySelector('.round-button--call--sm');
const callHeaderButton = document.querySelector('.round-button--call--header');
const feedbackSmButton = document.querySelector('.round-button--chat--sm');
const feedbackHeaderButton = document.querySelector('.round-button--chat--header');

const closeButtonCall = document.querySelector('.round-button--cross--modal-call');
const closeButtonFeedback = document.querySelector('.round-button--cross--modal-feedback');

let fromMenu = false;


// modal call
callSmButton.addEventListener('click', () => {
  modalCall.classList.add('modal-wrapper--show');
  document.body.classList.add('scroll-lock');
  fromMenu = true;
});

callHeaderButton.addEventListener('click', () => {
  modalCall.classList.add('modal-wrapper--show');
  document.body.classList.add('scroll-lock');
});

closeButtonCall.addEventListener('click', () => {
  modalCall.classList.remove('modal-wrapper--show');
  if (!fromMenu) {
    document.body.classList.remove('scroll-lock');
  }
});

overlayCall.addEventListener('click', (evt) => {
  if (evt.target === overlayCall) {
    modalCall.classList.remove('modal-wrapper--show');
    if (!fromMenu) {
      document.body.classList.remove('scroll-lock');
    }
  }
});


// modal feedback
feedbackSmButton.addEventListener('click', () => {
  modalFeedback.classList.add('modal-wrapper--show');
  document.body.classList.add('scroll-lock');
  fromMenu = true;
});

feedbackHeaderButton.addEventListener('click', () => {
  modalFeedback.classList.add('modal-wrapper--show');
  document.body.classList.add('scroll-lock');

});

closeButtonFeedback.addEventListener('click', () => {
  modalFeedback.classList.remove('modal-wrapper--show');
  if (!fromMenu) {
    document.body.classList.remove('scroll-lock');
  }
});

overlayFeedback.addEventListener('click', (evt) => {
  if (evt.target === overlayFeedback) {
    modalFeedback.classList.remove('modal-wrapper--show');
    if (!fromMenu) {
      document.body.classList.remove('scroll-lock');
    }
  }
});


