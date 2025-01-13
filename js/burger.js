document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
});

document.querySelectorAll(".svg-link-nav").forEach((button) => {
  button.addEventListener("click", function () {
    document.querySelector(".nav").classList.remove("open");
  });
});
