const expandButtonList = document.querySelectorAll('.expand-button');
const expandButtonMainSection = document.querySelector('.expand-button--main-section');
const expandButtonBrands = document.querySelector('.expand-button--brands');
const expandButtonTechs = document.querySelector('.expand-button--techs');
const hideButton = document.querySelector('.hide-button');
const contentListMainSection = document.querySelector('.main-section__text');
const contentListBrands = document.querySelector('.brands-swiper');
const contentListTechs = document.querySelector('.techs-swiper');
// const sliderList = document.querySelectorAll('.swiper');
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
// sm
//
// const showSm = document.querySelector('.open-close-button--sm');

const showSmS = document.querySelector('.round-button--burger--s');
const showSmMd = document.querySelector('.round-button--burger--md');
const hideButtonSm = document.querySelector('.round-button--cross--sm');
const sideMenu = document.querySelector('.sm-wrapper');
const sm = document.querySelector('.sm');
const overlaySm = document.querySelector('.overlay--sm');

showSmS.addEventListener('click', () => {
  sideMenu.classList.add('modal-wrapper--show');
  sm.classList.add('modal-wrapper--show');
  console.log('show sm');
});

showSmMd.addEventListener('click', () => {
  sideMenu.classList.add('modal-wrapper--show');
  sm.classList.add('modal-wrapper--show');
  console.log('show sm');
});

hideButtonSm.addEventListener('click', () => {
  sideMenu.classList.remove('modal-wrapper--show');
  console.log('hide sm');
});

overlaySm.addEventListener('click', (evt) => {
  if (evt.target === overlaySm) {
    sideMenu.classList.remove('modal-wrapper--show');
    console.log('hide sm');
  }
});





//
// Модальные окна
//
const modalCall = document.querySelector('.modal-wrapper--call');
// const modalShow = document.querySelector('.modal-wrapper--show');
const overlayCall = document.querySelector('.overlay--call');

const modalFeedback = document.querySelector('.modal-wrapper--feedback');
const overlayFeedback = document.querySelector('.overlay--feedback');

const callSmButton = document.querySelector('.round-button--call--sm');
const callHeaderButton = document.querySelector('.round-button--call--header');
const feedbackSmButton = document.querySelector('.round-button--chat--sm');
const feedbackHeaderButton = document.querySelector('.round-button--chat--header');

const closeButtonCall = document.querySelector('.round-button--cross--modal-call');
const closeButtonFeedback = document.querySelector('.round-button--cross--modal-feedback');

const modalCallTest = document.querySelector('.modal--call--test');
const mainContentTest = document.querySelector('.main-content-test');



callSmButton.addEventListener('click', () => {
  modalCall.classList.add('modal-wrapper--show');
  
  // document.body.classList.add('scroll-lock');
  // overlay.style.display = 'flex';
  // overlay.classList.add('show');

  // mainContentTest.classList.add('overlay');
  // expandButtonBrands.textContent = 'Скрыть';
  // expandButtonBrands.classList.add('expand-button--hide');
  console.log('open');
});

callHeaderButton.addEventListener('click', () => {
  modalCall.classList.add('modal-wrapper--show');
  console.log('open');
});

function openCallPopup() {

  // modalCallTest.style.display = 'flex';
}

closeButtonCall.addEventListener('click', () => {
  modalCall.classList.remove('modal-wrapper--show');
  console.log('close');
});

overlayCall.addEventListener('click', (evt) => {
  if (evt.target === overlayCall) {
    modalCall.classList.remove('modal-wrapper--show');
    console.log('hide sm');
  }
});

function closeCallPopup() {

  // modalCallTest.style.display = 'none';
}




feedbackSmButton.addEventListener('click', () => {
  modalFeedback.classList.add('modal-wrapper--show');
  
  // document.body.classList.add('scroll-lock');
  // overlay.style.display = 'flex';
  // overlay.classList.add('show');

  // mainContentTest.classList.add('overlay');
  // expandButtonBrands.textContent = 'Скрыть';
  // expandButtonBrands.classList.add('expand-button--hide');
  console.log('open');
});

feedbackHeaderButton.addEventListener('click', () => {
  modalFeedback.classList.add('modal-wrapper--show');
  
  // document.body.classList.add('scroll-lock');
  // overlay.style.display = 'flex';
  // overlay.classList.add('show');

  // mainContentTest.classList.add('overlay');
  // expandButtonBrands.textContent = 'Скрыть';
  // expandButtonBrands.classList.add('expand-button--hide');
  console.log('open');
});

function openFeedbackPopup() {

  // modalCallTest.style.display = 'flex';
}

closeButtonFeedback.addEventListener('click', () => {
  modalFeedback.classList.remove('modal-wrapper--show');
  
  // document.body.classList.remove('scroll-lock');
  // overlay.style.display = 'none';
  // overlay.classList.remove('show');

  // mainContentTest.classList.add('overlay');
  // expandButtonBrands.textContent = 'Скрыть';
  // expandButtonBrands.classList.add('expand-button--hide');
  console.log('close');
});
function closeFeedbackPopup() {

  // modalCallTest.style.display = 'none';
}

overlayFeedback.addEventListener('click', (evt) => {
  if (evt.target === overlayFeedback) {
    modalFeedback.classList.remove('modal-wrapper--show');
    console.log('hide sm');
  }
});

// function closePopupOverlay() {
//   overlay.addEventListener('click', () => {
//     modalCall.classList.remove('modal-wrapper--test');
//     document.body.classList.remove('scroll-lock');
//     overlay.style.display = 'none';
//     // mainContentTest.classList.add('overlay');
//     // expandButtonBrands.textContent = 'Скрыть';
//     // expandButtonBrands.classList.add('expand-button--hide');
//     console.log('close');
//   });

//   // modalCallTest.style.display = 'none';
// }

openCallPopup();
closeCallPopup();

openFeedbackPopup();
closeFeedbackPopup();

// closePopupOverlay();





// openCloseButton.addEventListener("click", openModalAndLockScroll());
// closeButton.addEventListener("click", closeModal);
// // dialog.addEventListener("close", returnScroll)

// function openModalAndLockScroll() {
//   modalCall.showModal();
//   // document.body.classList.add("scroll-lock")
// }

// function closeModal () {
//   modalCall.close();
//   console.log('close');
// }

// function returnScroll() {
//   document.body.classList.remove("scroll-lock")
// }





// const sliders = document.querySelectorAll('.swiper');

// sliders.forEach((el) => {
//   if (window.innerWidth < 768 && slider.dataset.mobile === 'false') {
//     let mySwiper = new Swiper(el, {
//       direction: 'horizontal',
//       spaceBetween: 16,
//       slidesPerView: 'auto',
//       freeMode: true,
//       slidesOffsetBefore: 16,
//       slidesOffsetAfter: 16,
//       pagination: {
//         el: el.querySelector('.swiper-pagination'),
//         clickable: true,
//       },
//     });

//     el.dataset.mobile = 'true';
//   }

//   if (window.innerWidth >= 768) {
//     el.dataset.mobile = 'false';

//     if (el.classList.contains('swiper-initialized')) {
//       mySwiper.destroy();
//     }
//   }
// });

// function contentButtonShow() {
//     contentList.classList.add('expand');
//     readButton.classList.add('hidden');
//     hideButton.classList.remove('hidden');
//     console.log("show");
// }

// function contentButtonHide() {
//     contentList.classList.remove('expand');
//     readButton.classList.remove('hidden');
//     hideButton.classList.add('hidden');
//     console.log("hide");
// }


function contentButtonShow() {
  // contentList.classList.add('expand');
  // readButton.classList.add('hidden');
  // hideButton.classList.remove('hidden');
  
  expandButtonMainSection.addEventListener('click', () => {
    // readButtonList.forEach(element => {
    //   if (!element.classList.contains('read-button--hide')) {
    //     contentList.classList.add('expand');
    //     element.textContent = 'Скрыть';
    //     element.classList.add('read-button--hide');
    //     console.log('show');
    //   } else {
    //     if (element.classList.contains('read-button--read-more')) {
    //       element.textContent = 'Читать далее';
    //     } else {
    //       element.textContent = 'Показать все';
    //     }
    //     contentList.classList.remove('expand');
    //     element.classList.remove('read-button--hide');
    //     console.log('hide');
    //   }  
    // });


    if (!expandButtonMainSection.classList.contains('expand-button--hide')) {
      contentListMainSection.classList.add('expand');
      expandButtonMainSection.textContent = 'Скрыть';
      expandButtonMainSection.classList.add('expand-button--hide');
      console.log('show');
    } else {
      expandButtonMainSection.textContent = 'Читать далее';
      contentListMainSection.classList.remove('expand');
      expandButtonMainSection.classList.remove('expand-button--hide');
      console.log('hide');
    }

  });



  // contentList.classList.add('expand');
  // readButton.textContent = 'Скрыть';
  // readButton.classList.add('read-button--hide');
}

function contentButtonBrandsShow() {
  expandButtonBrands.addEventListener('click', () => {
    if (!expandButtonBrands.classList.contains('expand-button--hide')) {
      contentListBrands.classList.add('expand');
      expandButtonBrands.textContent = 'Скрыть';
      expandButtonBrands.classList.add('expand-button--hide');
      console.log('show');
    } else {
      expandButtonBrands.textContent = 'Показать все';
      contentListBrands.classList.remove('expand');
      expandButtonBrands.classList.remove('expand-button--hide');
      console.log('hide');
    }
  });
}

function contentButtonTechsShow() {
  expandButtonTechs.addEventListener('click', () => {
    if (!expandButtonTechs.classList.contains('expand-button--hide')) {
      contentListTechs.classList.add('expand');
      expandButtonTechs.textContent = 'Скрыть';
      expandButtonTechs.classList.add('expand-button--hide');
      console.log('show');
    } else {
      expandButtonTechs.textContent = 'Показать все';
      contentListTechs.classList.remove('expand');
      expandButtonTechs.classList.remove('expand-button--hide');
      console.log('hide');
    }
  });
}

function contentButtonHide() {
  contentList.classList.remove('expand');
  readButton.classList.remove('hidden');
  hideButton.classList.add('hidden');


  console.log("hide");
}


// function mobileSlider() {
//   if (window.innerWidth < 768 && slider.dataset.mobile === 'false') {
//     mySwiper = new Swiper(slider, {
//       direction: 'horizontal',
//       spaceBetween: 16,
//       slidesPerView: 'auto',
//       freeMode: true,
//       slidesOffsetBefore: 16,
//       slidesOffsetAfter: 16,
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//     });

//     slider.dataset.mobile = 'true';
//   }

//   if (window.innerWidth >= 768) {
//     slider.dataset.mobile = 'false';

//     if (slider.classList.contains('swiper-initialized')) {
//       mySwiper.destroy();
//     }
//   }
// }

function mobileSlider(slider, pag) {

  // let mySwiper = mySwiper1;

  if (window.innerWidth < 768 && slider.dataset.mobile === 'false') {
    mySwiper = new Swiper(slider, {
      direction: 'horizontal',
      spaceBetween: 16,
      slidesPerView: 'auto',
      freeMode: true,
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,
      pagination: {
        el: pag,
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


// contentButtonShow();
contentButtonBrandsShow();
contentButtonTechsShow();

// readButton.addEventListener('click', () => {
//   contentButtonShow();
//   // console.log('click show');
// });

// hideButton.addEventListener('click', () => {
//   contentButtonHide();
//   console.log('click hide');
// });




window.addEventListener('load', () => {
  // mobileSlider(sliderBrands, paginationBrands);
  // mobileSlider(sliderTechs, paginationTechs);
  // mobileSlider(sliderPrices, paginationPrices);

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
  // mobileSlider(sliderBrands, paginationBrands);
  // mobileSlider(sliderTechs, paginationTechs);
  // mobileSlider(sliderPrices, paginationPrices);

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










// window.addEventListener('load', () => {
//   mobileSlider(sliderBrands, mySwiperBrands, paginationBrands);
//   mobileSlider(sliderTechs, mySwiperTechs, paginationTechs);
//   mobileSlider(sliderPrices, mySwiperPrices, paginationPrices);
// });

// window.addEventListener('resize', () => {
//   mobileSlider(sliderBrands, mySwiperBrands, paginationBrands);
//   mobileSlider(sliderTechs, mySwiperTechs, paginationTechs);
//   mobileSlider(sliderPrices, mySwiperPrices, paginationPrices);
// });







function getName() {
  let name = "name1";

  return function displayName() {
    console.log(name);
  };
}

let name1 = getName();

name1();

getName();



(function(msg) {		// анонимная функция. Для инкапсулирования
  console.log(msg);
})("Hello");







// устанавливаем триггер для модального окна (название можно изменить)
const modalTrigger = document.getElementsByClassName("trigger")[0];

// получаем ширину отображенного содержимого и толщину ползунка прокрутки
const windowInnerWidth = document.documentElement.clientWidth;
const scrollbarWidth = parseInt(window.innerWidth) - parseInt(document.documentElement.clientWidth);

// привязываем необходимые элементы
const bodyElementHTML = document.getElementsByTagName("body")[0];
const modalBackground = document.getElementsByClassName("modalBackground")[0];
const modalClose = document.getElementsByClassName("modalClose")[0];
const modalActive = document.getElementsByClassName("modalActive")[0];


// функция для корректировки положения body при появлении ползунка прокрутки
function bodyMargin() {
  bodyElementHTML.style.marginRight = "-" + scrollbarWidth + "px";
}

// при длинной странице - корректируем сразу
bodyMargin();


// событие нажатия на триггер открытия модального окна
modalTrigger.addEventListener("click", function () {
  // делаем модальное окно видимым
  modalBackground.style.display = "block";

  // если размер экрана больше 1366 пикселей (т.е. на мониторе может появиться ползунок)
  if (windowInnerWidth >= 1366) {
      bodyMargin();
  }

  // позиционируем наше окно по середине, где 175 - половина ширины модального окна
  modalActive.style.left = "calc(50% - " + (175 - scrollbarWidth / 2) + "px)";
  console.log('helloooooo');
});


// нажатие на крестик закрытия модального окна
modalClose.addEventListener("click", function () {
  modalBackground.style.display = "none";
  if (windowInnerWidth >= 1366) {
      bodyMargin();
  }
});

// закрытие модального окна на зону вне окна, т.е. на фон
modalBackground.addEventListener("click", function (event) {
  if (event.target === modalBackground) {
      modalBackground.style.display = "none";
      if (windowInnerWidth >= 1366) {
          bodyMargin();
      }
  }
});





