var btn = document.querySelector(".search-form-btn");
var form = document.querySelector(".hotel-search-form");
var arrival = form.querySelector("[name=arrival-day]");
var adults = form.querySelector("[name=adults-counter]");
var children = form.querySelector("[name=children-counter]");

var isStorageSupport = true;
var storageAdults = "";
var storageChildren = "";

try {
  storageAdults = localStorage.getItem("adults");
  storageChildren = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

btn.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.toggle("form-appearance");
  arrival.focus();

  if (storageAdults || storageChildren) {
    adults.value = storageAdults;
    children.value = storageChildren;
  }
});

form.addEventListener("submit", function(evt) {
  if (adults.value || children.value) {
    if (isStorageSupport) {
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("children", children.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (form.classList.contains("form-appearance")) {
      evt.preventDefault();
      form.classList.remove("form-appearance");
    }
  }
});
