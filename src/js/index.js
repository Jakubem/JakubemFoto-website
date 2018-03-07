const halkaBox = require('./halkaBox').halkaBox;

halkaBox.run("gallery1", {
  hideButtons: false,
  animation: "slide",
  theme: "dark",
  preload: 2
});

halkaBox.run("gallery2", {
  hideButtons: false,
  animation: "slide",
  theme: "dark",
  preload: 2
});

const btn = document.querySelector('.btn');
const hdr = document.querySelector('.menu-list');
btn.addEventListener('click', function () {
  hdr.classList.toggle('open');
});