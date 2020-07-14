var popup = document.querySelector(".modal_search");
var form = document.querySelector(".modal_search_form");
var openClose = document.querySelector(".show_form");
var submitButton = popup.querySelector(".hotel_search");
var arrivalDate = popup.querySelector("[name=arrival_date]");
var departureDate = popup.querySelector("[name=departure_date]");
var adult = popup.querySelector("[name=amount_of_adult]");
var children = popup.querySelector("[name=amount_of_children]");

popup.classList.add("visually-hidden");

openClose.addEventListener("click", function(event) {
  event.preventDefault();
  if (popup.classList.contains("modal_error")) {
    popup.classList.remove("modal_error");
  }
  popup.classList.toggle("visually-hidden");
  popup.classList.toggle("modal_show");
});

submitButton.addEventListener("click", function(event) {
  if (!(arrivalDate.value && departureDate.value && adult.value && children.value)) {
      event.preventDefault();
      popup.classList.remove("modal_error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal_error");
}
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
      if (!popup.classList.contains("visually-hidden")) {
        popup.classList.add("visually-hidden");
        popup.classList.remove("modal_show");
        if (popup.classList.contains("modal_error")) {
          popup.classList.remove("modal_error");
        }
      }
  }
});
