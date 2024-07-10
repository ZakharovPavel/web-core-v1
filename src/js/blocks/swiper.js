
const sliderBrands = document.querySelector('.brands-swiper');
const sliderTechs = document.querySelector('.techs-swiper');
const sliderPrices = document.querySelector('.prices-swiper');
const paginationBrands = document.querySelector('.swiper-pagination-brands');
const paginationTechs = document.querySelector('.swiper-pagination-techs');
const paginationPrices = document.querySelector('.swiper-pagination-prices');
let mySwiper;
let mySwiperBrands;
let mySwiperTechs;
let mySwiperPrices;

//
// Дублирование кода уберу 
//

window.addEventListener('load', () => {
  (function() {		// анонимная функция. Для инкапсулирования
		if (window.innerWidth < 768 && sliderBrands.dataset.mobile === 'false') {
      mySwiperBrands = new Swiper(sliderBrands, {
        direction: 'horizontal',
        spaceBetween: 16,
        slidesPerView: 'auto',
        freeMode: true,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
        pagination: {
          el: '.swiper-pagination-brands',
          clickable: true,
        },
      });
  
      sliderBrands.dataset.mobile = 'true';
    }
  
    if (window.innerWidth >= 768) {
      sliderBrands.dataset.mobile = 'false';
  
      if (sliderBrands.classList.contains('swiper-initialized')) {
        mySwiperBrands.destroy();
      }
    }
	})();

  (function() {		// анонимная функция. Для инкапсулирования
		if (window.innerWidth < 768 && sliderTechs.dataset.mobile === 'false') {
      mySwiperTechs = new Swiper(sliderTechs, {
        direction: 'horizontal',
        spaceBetween: 16,
        slidesPerView: 'auto',
        freeMode: true,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
        pagination: {
          el: '.swiper-pagination-techs',
          clickable: true,
        },
      });
  
      sliderTechs.dataset.mobile = 'true';
    }
  
    if (window.innerWidth >= 768) {
      sliderTechs.dataset.mobile = 'false';
  
      if (sliderTechs.classList.contains('swiper-initialized')) {
        mySwiperTechs.destroy();
      }
    }
	})();

  (function() {		// анонимная функция. Для инкапсулирования
		if (window.innerWidth < 768 && sliderPrices.dataset.mobile === 'false') {
      mySwiperPrices = new Swiper(sliderPrices, {
        direction: 'horizontal',
        spaceBetween: 16,
        slidesPerView: 'auto',
        freeMode: true,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
        pagination: {
          el: '.swiper-pagination-prices',
          clickable: true,
        },
      });
  
      sliderPrices.dataset.mobile = 'true';
    }
  
    if (window.innerWidth >= 768) {
      sliderPrices.dataset.mobile = 'false';
  
      if (sliderPrices.classList.contains('swiper-initialized')) {
        mySwiperPrices.destroy();
      }
    }
	})();

});


window.addEventListener('resize', () => {
  (function() {		// анонимная функция. Для инкапсулирования
		if (window.innerWidth < 768 && sliderBrands.dataset.mobile === 'false') {
      mySwiperBrands = new Swiper(sliderBrands, {
        direction: 'horizontal',
        spaceBetween: 16,
        slidesPerView: 'auto',
        freeMode: true,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
        pagination: {
          el: '.swiper-pagination-brands',
          clickable: true,
        },
      });
  
      sliderBrands.dataset.mobile = 'true';
    }
  
    if (window.innerWidth >= 768) {
      sliderBrands.dataset.mobile = 'false';
  
      if (sliderBrands.classList.contains('swiper-initialized')) {
        mySwiperBrands.destroy();
      }
    }
	})();

  (function() {		// анонимная функция. Для инкапсулирования
		if (window.innerWidth < 768 && sliderTechs.dataset.mobile === 'false') {
      mySwiperTechs = new Swiper(sliderTechs, {
        direction: 'horizontal',
        spaceBetween: 16,
        slidesPerView: 'auto',
        freeMode: true,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
        pagination: {
          el: '.swiper-pagination-techs',
          clickable: true,
        },
      });
  
      sliderTechs.dataset.mobile = 'true';
    }
  
    if (window.innerWidth >= 768) {
      sliderTechs.dataset.mobile = 'false';
  
      if (sliderTechs.classList.contains('swiper-initialized')) {
        mySwiperTechs.destroy();
      }
    }
	})();

  (function() {		// анонимная функция. Для инкапсулирования
		if (window.innerWidth < 768 && sliderPrices.dataset.mobile === 'false') {
      mySwiperPrices = new Swiper(sliderPrices, {
        direction: 'horizontal',
        spaceBetween: 16,
        slidesPerView: 'auto',
        freeMode: true,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
        pagination: {
          el: '.swiper-pagination-prices',
          clickable: true,
        },
      });
  
      sliderPrices.dataset.mobile = 'true';
    }
  
    if (window.innerWidth >= 768) {
      sliderPrices.dataset.mobile = 'false';
  
      if (sliderPrices.classList.contains('swiper-initialized')) {
        mySwiperPrices.destroy();
      }
    }
	})();

});