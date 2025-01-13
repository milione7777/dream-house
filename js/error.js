const btnFormElem = document.getElementById("btn-modal-form");
const borderElem = document.querySelector(".border-modal-form-2");
const borderElement = document.querySelector(".border-modal-form");
const teleForm = document.getElementById("tel");
const errorTxt = document.querySelector(".error-modal");
const formElem = document.querySelector(".form-modal");
const nameForm = document.getElementById("name");
const errorName = document.querySelector(".error-modal-name");
const modalThanks = document.querySelector(".backdrop-thank"); // Модальное окно "Спасибо"

// Validate the form
function validateForm() {
  let isValid = true;

  // Validate phone number
  if (teleForm.value.trim().length < 10) {
    errorTxt.classList.add("visible");
    borderElem.classList.add("red");
    isValid = false;
  } else {
    errorTxt.classList.remove("visible");
    borderElem.classList.remove("red");
  }

  // Validate name
  if (nameForm.value.trim() === "") {
    errorName.classList.add("visible");
    borderElement.classList.add("red");
    isValid = false;
  } else {
    errorName.classList.remove("visible");
    borderElement.classList.remove("red");
  }

  return isValid;
}

// Form submission handler
formElem.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  if (validateForm()) {
    modalThanks.classList.add("opens"); // Show the "Thank You" modal
  }
});

// Close the modal on button click
modalThanks.addEventListener("click", () => {
  modalThanks.classList.remove("opens");
});
