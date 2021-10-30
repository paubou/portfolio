let id = "";
var nuitjour = new Date();
var time = nuitjour.getHours();

function nextLetter(ch) {
  if (!ch.match(/[a-z]/i)) return ch;
  else if (ch === "Z") return "A";
  else if (ch === "z") return "a";
  return String.fromCharCode(ch.charCodeAt(0) + 1);
}

$(document).ready(function () {
  //open in a new tab markdown links
  $(document.links)
    .filter(function () {
      return this.hostname != window.location.hostname;
    })
    .attr("target", "_blank");

  var mySwiper = new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 0,
    speed: 300,
    autoHeight: true,
    allowTouchMove: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: {
      invert: false,
      forceToAxis: true,
      sensitivity: 4,
      releaseOnEdges: true,
    },
  });

  $(
    ".gauche#bienvenue span, .gauche#propos p, .milieu#contact a, .droite a"
  ).each(function () {
    var letters = $(this).text();
    var nHTML = "";
    for (var letter of letters) {
      nHTML += "<span class='x'>" + letter + "</span>";
    }
    $(this).html(nHTML);
    $(".x").hover(function (e) {
      if (e.type === "mouseenter") $(this).text(nextLetter($(this).text()));
    });
  });
});

function RandomColor() {
  var nuitjour = new Date();
  var time = nuitjour.getHours();

  if (time > 8 && time < 20) {
    console.log("il est " + time + "h, " + "c'est la journée");
    var colors = {
      "#979797": true,
      "#ff1e00": true,
      "#305b3f": true,
      "#99733A": true,
      "#5213c5": true,
    };
  } else {
    console.log("il est " + time + "h, " + "c'est la nuit");
    // document.documentElement.style.setProperty("--background-color", "white");
    // document.documentElement.style.setProperty("--font-color", "#ec79f8");
    // document.documentElement.style.setProperty("--selection", "green");
    // document.documentElement.style.setProperty("--shadow", "white");
    // document.documentElement.style.setProperty("--alt-text-color", "white");

    var colors = {
      white: true,
      "#6363FF": true,
      "#FFDB0F": true,
      "#728C97": true,
      "#FF751F": true,
    };
  }

  function getRandomKey(collection) {
    let keys = Array.from(Object.keys(collection));
    return keys[Math.floor(Math.random() * keys.length)];
  }

  var CouleurGauche1 = getRandomKey(colors);
  delete colors[CouleurGauche1];
  var CouleurGauche2 = getRandomKey(colors);
  delete colors[CouleurGauche2];
  var CouleurDroite1 = getRandomKey(colors);
  delete colors[CouleurDroite1];
  var CouleurDroite2 = getRandomKey(colors);
  delete colors[CouleurDroite2];

  function SetColor(id, color) {
    var elmt = document.getElementById(id);
    if (elmt !== null) {
      elmt.style.backgroundColor = color;
    }
  }

  SetColor("gauche", CouleurGauche1);
  SetColor("droite", CouleurDroite1);
  SetColor("gauche1", CouleurGauche1);
  SetColor("gauche2", CouleurGauche2);
  SetColor("droite1", CouleurDroite1);
  SetColor("droite2", CouleurDroite2);

  function SetLinks() {
    var liens = document.querySelectorAll("a");
    for (i = 0, len = liens.length; i < len; i++) {
      liens[i].style.color = CouleurGauche1;
    }
  }
  SetLinks();
}

$(document).on("click", ".milieu#contact a", function () {
  let id = $(this).attr("id");
  $(".alphabet img").css({ opacity: "0" });
  $("#i" + id).css({ opacity: "1", "z-index": "10" });
  $(".alphabet").css({ "z-index": "10" });
  $("#" + id).css({ "pointer-events": "none", color: "#5ace18" });
  $(".alphabet").css({ opacity: "1" });
  $(".milieu#contact").append('<div class="close">fin</div>');
  $(".close").next().remove();
});

$(document).on("click", ".close", function () {
  $(".alphabet img").css({ opacity: "0" });
  $(".alphabet").css({ "z-index": "-10" });
  $(".close").remove();
});
