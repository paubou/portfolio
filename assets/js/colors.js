function color() {
  const nuitjour = new Date();
  const time = nuitjour.getHours();
  let colors;
  console.log(matchMedia("(prefers-color-scheme:dark)").matches);
  if (!matchMedia("(prefers-color-scheme:dark)").matches === true) {
    colors = [
      "#979797", // gris
      "#305b3f", // vert foncé
      "#99733A", // or
      "#8355D7", // violet pale
      "#FF4000", // orange
      "#48A7C9", // bleu
    ];
    // console.log('il est ' + time + 'h, ' + "c'est la nuit")
  } else {
    colors = ["white", "#6363FF", "#FFDB0F", "#728C97", "#FF751F"];
  }
  const random = Math.floor(Math.random() * colors.length);
  // console.log(colors, random)
  const root = document.querySelector(":root");
  root.style.setProperty("--randomcolor", colors[random]);
}

document.addEventListener("DOMContentLoaded", function () {
  setInterval(color(), 1000);
});

// var intervalId = window.setInterval(function () {
//   color();
// }, 5000);
