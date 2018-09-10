var btn = document.querySelector(".search-form-btn");
var form = document.querySelector(".hotel-search-form");
var arrival = form.querySelector("[name=arrival-day]");
var departure = form.querySelector("[name=departure-day]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("arrival");
} catch (err) {
  isStorageSupport = false;
}

btn.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.toggle("form-appearance");

  if (storage) {
    arrival.value = storage;
    departure.focus();
  } else {
    arrival.focus();
  }
});

form.addEventListener("submit", function(evt) {
  if (!arrival.value || !departure.value) {
    evt.preventDefault();
    console.log("Введите даты прибытия и отъезда");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("arrival", arrival.value);
    localStorage.setItem("departure", departure.value);
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
