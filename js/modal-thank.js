const form = document.querySelector("form-modal");
const backdropThank = document.querySelector("backdrop-thank");

form.addEventListener("submit", thankOpen());

function thankOpen(event) {
    event.preventDefault();
    
    backdropThank.classList.add("opens");
}
