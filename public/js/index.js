halkaBox.run("gallery1", {
  hideButtons: false, // hide buttons on touch devices (true || false)
  animation: "slide", // animation type on next/prev ("slide" || "fade")
  theme: "dark", // lightbox overlay theme ("light" || "dark")
  preload: 2 // number of images to preload
});

halkaBox.run("gallery2", {
  hideButtons: false,
  animation: "slide",
  theme: "dark",
  preload: 2
});

var btn = document.querySelector('.btn');
var hdr = document.querySelector('.menu-list');
btn.addEventListener('click', function () {
  hdr.classList.toggle('open');
});
