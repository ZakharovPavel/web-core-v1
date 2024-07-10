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


// modal call
callSmButton.addEventListener('click', () => {
  modalCall.classList.add('modal-wrapper--show');
});

callHeaderButton.addEventListener('click', () => {
  modalCall.classList.add('modal-wrapper--show');
});

closeButtonCall.addEventListener('click', () => {
  modalCall.classList.remove('modal-wrapper--show');
});

overlayCall.addEventListener('click', (evt) => {
  if (evt.target === overlayCall) {
    modalCall.classList.remove('modal-wrapper--show');
  }
});


// modal feedback
feedbackSmButton.addEventListener('click', () => {
  modalFeedback.classList.add('modal-wrapper--show');
});

feedbackHeaderButton.addEventListener('click', () => {
  modalFeedback.classList.add('modal-wrapper--show');
});

closeButtonFeedback.addEventListener('click', () => {
  modalFeedback.classList.remove('modal-wrapper--show');
});

overlayFeedback.addEventListener('click', (evt) => {
  if (evt.target === overlayFeedback) {
    modalFeedback.classList.remove('modal-wrapper--show');
  }
});