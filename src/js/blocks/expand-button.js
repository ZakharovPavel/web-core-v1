const expandButtonMainSection = document.querySelector('.expand-button--main-section');
const expandButtonBrands = document.querySelector('.expand-button--brands');
const expandButtonTechs = document.querySelector('.expand-button--techs');
const contentListMainSection = document.querySelector('.main-section__text');
const contentListBrands = document.querySelector('.brands-swiper');
const contentListTechs = document.querySelector('.techs-swiper');


expandButtonMainSection.addEventListener('click', () => {
  if (!expandButtonMainSection.classList.contains('expand-button--hide')) {
    contentListMainSection.classList.add('expand');
    expandButtonMainSection.textContent = 'Скрыть';
    expandButtonMainSection.classList.add('expand-button--hide');
  } else {
    expandButtonMainSection.textContent = 'Читать далее';
    contentListMainSection.classList.remove('expand');
    expandButtonMainSection.classList.remove('expand-button--hide');
  }
});

expandButtonBrands.addEventListener('click', () => {
  if (!expandButtonBrands.classList.contains('expand-button--hide')) {
    contentListBrands.classList.add('expand');
    expandButtonBrands.textContent = 'Скрыть';
    expandButtonBrands.classList.add('expand-button--hide');
  } else {
    expandButtonBrands.textContent = 'Показать все';
    contentListBrands.classList.remove('expand');
    expandButtonBrands.classList.remove('expand-button--hide');
  }
});

expandButtonTechs.addEventListener('click', () => {
  if (!expandButtonTechs.classList.contains('expand-button--hide')) {
    contentListTechs.classList.add('expand');
    expandButtonTechs.textContent = 'Скрыть';
    expandButtonTechs.classList.add('expand-button--hide');
  } else {
    expandButtonTechs.textContent = 'Показать все';
    contentListTechs.classList.remove('expand');
    expandButtonTechs.classList.remove('expand-button--hide');
  }
});