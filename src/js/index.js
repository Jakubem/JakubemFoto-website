const halkaBox = require('./halkaBox').halkaBox;

halkaBox.run("gallery1", {
  hideButtons: false,
  animation: "slide",
  theme: "dark",
  preload: 1
});

halkaBox.run("gallery2", {
  hideButtons: false,
  animation: "slide",
  theme: "dark",
  preload: 1
});
halkaBox.run("gallery3", {
  hideButtons: false,
  animation: "slide",
  theme: "light",
  preload: 1
});

const btn = document.querySelector('.btn');
const hdr = document.querySelector('.menu-list');
btn.addEventListener('click', function () {
  hdr.classList.toggle('open');
});
