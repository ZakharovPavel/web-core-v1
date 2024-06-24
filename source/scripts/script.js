const readButton = document.querySelector('.read-button');
const hideButton = document.querySelector('.hide-button');
const contentList = document.querySelector('.brands-swiper');
const slider = document.querySelector(".swiper");
let mySwiper;

function contentButtonShow() {
  readButton.addEventListener('click', () => {
    contentList.classList.add('expand');
    readButton.classList.add('hidden');
    hideButton.classList.remove('hidden');
  });
}

function contentButtonHide() {
  hideButton.addEventListener('click', () => {
    contentList.classList.remove('expand');
    readButton.classList.remove('hidden');
    hideButton.classList.add('hidden');
  });
}


function mobileSlider() {
  if (window.innerWidth < 768 && slider.dataset.mobile === 'false') {
    mySwiper = new Swiper(slider, {
      direction: 'horizontal',
      spaceBetween: 16,
      slidesPerView: 'auto',
      freeMode: true,
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth >= 768) {
    slider.dataset.mobile = 'false';

    if (slider.classList.contains('swiper-initialized')) {
      mySwiper.destroy();
    }
  }
}


contentButtonShow();
contentButtonHide();

window.addEventListener('load', () => {
  mobileSlider();
});

window.addEventListener('resize', () => {
  mobileSlider();
});



