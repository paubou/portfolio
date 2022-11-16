function swiper(el) {
  var pa = el.nextElementSibling.getElementsByClassName("swiper-pagination")[0];
  var pr =
    el.nextElementSibling.getElementsByClassName("swiper-button-prev")[0];
  var nx =
    el.nextElementSibling.getElementsByClassName("swiper-button-next")[0];

  const swiper = new Swiper(".swiper#" + el.id, {
    preloadImages: false,
    // // Enable lazy loading
    lazy: {
      loadPrevNext: true,
      loadOnTransitionStart: true,
      loadPrevNextAmount: 2,
    },
    init: false,
    loop: true,
    spaceBetween: 0,
    effect: "slide",
    speed: 300,
    autoHeight: true,
    grabCursor: true,

    // I    f we need pagination
    // pagination: {
    //   el: pa,
    //   type: "fraction",
    // },

    // Navigation arrows
    navigation: {
      nextEl: nx,
      prevEl: pr,
    },

    allowTouchMove: true,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    mousewheel: {
      invert: false,
      forceToAxis: true,
      sensitivity: 1000,
      thresholdDelta: 10,
    },
  });

  swiper.on("slideChange", function () {
    //   loop = 0;

    let i = swiper.activeIndex;
    let n = el.id.slice(2);
    document.getElementsByClassName("informations")[n].innerHTML = marked.parse(
      swiper.slides[i].firstElementChild.dataset.caption
    );
    document.getElementsByClassName("project-title")[n].innerHTML =
      swiper.slides[i].firstElementChild.dataset.title;
    document.getElementsByClassName("swiper-pagination")[n].innerHTML =
      swiper.slides[i].firstElementChild.dataset.pagination;
  });

  swiper.init();
}

function openPage(el) {
  child = el.nextElementSibling;

  autres = [...document.getElementsByClassName("active")];

  if (autres[0] != undefined && child.classList[1] != "active") {
    autres.forEach((autre) => autre.classList.remove("active"));
  }
  child.classList.toggle("active");
  el.classList.toggle("active");

  if (child.classList[1] === "active") {
    swiper(el);
  }

  window.location.hash = el.dataset.url;
}

window.addEventListener("load", function (event) {
  elwelcome = document.getElementsByClassName("welcome")[0];

  elwelcome.addEventListener("animationend", function () {
    elwelcome.remove();

    letterize();

    let url = window.location.hash.substring(1);
    if (url !== "") {
      toOpen = document.querySelector("[data-url=" + url + "]");
      toOpen.nextElementSibling.classList.toggle("active");
      toOpen.classList.toggle("active");

      swiper(toOpen);
    }
  });
});

function nextLetter(ch) {
  console.log(ch);
  if (!ch.match(/[a-z]/i)) {
    return ch;
  } else if (ch === "Z") {
    return "A";
  } else if (ch === "z") {
    return "a";
  }
  console.log("ping");
  return String.fromCharCode(ch.charCodeAt(0) + 1);
}

function letterize() {
  const toLetterize = document.querySelectorAll(
    ".b-left a, .b-center p, .b-right a, .b-right p:last-child, .informations"
  );
  console.log(toLetterize);
  toLetterize.forEach(function (letterized) {
    const letters = letterized.innerHTML;
    var nHTML = "";
    for (var letter of letters) {
      nHTML += "<span>" + letter + "</span>";
    }

    letterized.innerHTML = nHTML;

    document.querySelectorAll("span").forEach(function (hoveredLetter) {
      hoveredLetter.addEventListener("mouseenter", function (e) {
        hoveredLetter.innerHTML = nextLetter(hoveredLetter.innerText);
      });
    });
  });
}
