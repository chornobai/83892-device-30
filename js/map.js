let mapUp = document.querySelector(".map-on");
let map = document.querySelector(".modal-map");
let mapClose = map.querySelector(".btn-map-close");

mapUp.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("map-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("map-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (map.classList.contains("map-show")) {
      evt.preventDefault();
      map.classList.remove("map-show");
    }
  }
});
