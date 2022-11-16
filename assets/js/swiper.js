// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   // slidesPerView: 3,
//   // CenteredSlides: true,
//   init: false,
//   loop: true,
//   spaceBetween: 0,
//   effect: "slide",
//   fadeEffect: { crossFade: true },
//   speed: 300,

//   // I    f we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//     type: "fraction",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   allowTouchMove: true,

//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//   },

//   mousewheel: {
//     invert: false,
//     forceToAxis: true,
//     sensitivity: 1000,
//     thresholdDelta: 10,
//   },
// });

// //     let caption = activeSlide.dataset.caption;
// //     function updateCaptions () {

// //        if (activeSlide.hasAttribute('data-caption')) {
// //            captions.innerHTML = caption
// //        };
// //    }
// // swiper.on("init", function () {
// //   console.log(swiper.slides[1].firstElementChild.dataset.caption);
// //   document.getElementsByClassName("caption")[0].innerHTML =
// //     swiper.slides[1].firstElementChild.dataset.caption;
// // });
// swiper.forEach(function (swipe) {
//   swipe.on("slideChange", function (element) {
//     loop = 0;
//     console.log(swiper);
//     let i = swipe.activeIndex;
//     console.log(i);
//     // console.log(swipe.slides[i].firstElementChild.dataset.caption);
//     // console.log(document.getElementsByClassName("informations")[i]);
//     document.getElementsByClassName("informations")[loop].innerHTML =
//       swipe.slides[i].firstElementChild.dataset.caption;
//   });

//   swipe.init();
// });
