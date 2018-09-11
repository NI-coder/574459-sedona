var btn = document.querySelector(".search-form-btn");
var form = document.querySelector(".hotel-search-form");
var arrival = form.querySelector("[name=arrival-day]");
var departure = form.querySelector("[name=departure-day]");
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

form.classList.add("form-vanishing");

btn.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.toggle("form-vanishing");
  arrival.focus();

  if (!form.classList.contains("form-vanishing")) {
    form.classList.add("search-form-appearance");
  } else {
    form.classList.remove("search-form-appearance");
  }

  if (storageAdults || storageChildren) {
    adults.value = storageAdults;
    children.value = storageChildren;
  }

  if (form.classList.contains("form-error")) {
    form.classList.remove("form-error");
  }
});

form.addEventListener("submit", function(evt) {
  if (form.classList.contains("form-error")) {
    form.classList.remove("form-error");
  }

  if (!arrival.value || !departure.value) {
    evt.preventDefault();
    form.classList.add("form-error");
  }

  if (adults.value || children.value) {
    if (isStorageSupport) {
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("children", children.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (!form.classList.contains("form-vanishing")) {
      evt.preventDefault();
      form.classList.add("form-vanishing");
    }
  }
});
