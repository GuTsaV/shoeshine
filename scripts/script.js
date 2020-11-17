document.addEventListener("DOMContentLoaded", function(event) {
  setHeight();
});

window.addEventListener('resize', function(event) {
  setHeight();
});

function setHeight() {
  var headerHeight = menucontainer.offsetHeight;
  content.style.marginTop = headerHeight + 22 + 'px';
}
