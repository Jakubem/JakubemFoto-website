halkaBox.run("gallery1", {
  hideButtons: false, // hide buttons on touch devices (true || false)
  animation: "fade", // animation type on next/prev ("slide" || "fade")
  theme: "dark", // lightbox overlay theme ("light" || "dark")
  preload: 2 // number of images to preload
});

var btn = document.querySelector('.hmb');
var hdr = document.querySelector('.menu-list');
btn.addEventListener('click', function () {
  hdr.classList.toggle('open');
});
