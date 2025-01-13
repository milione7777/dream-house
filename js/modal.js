const callElems = document.querySelectorAll(".call-svg"); // Выбираем все элементы с классом 'call-svg'
const backdrop = document.querySelector(".backdrop");
const closeModals = document.getElementById("close");

// Добавляем обработчик событий для каждой кнопки
callElems.forEach((callElem) => {
  callElem.addEventListener("click", openModal);
});

closeModals.addEventListener("click", closeModal);

function openModal() {
  backdrop.classList.add("open");
}

function closeModal() {
  backdrop.classList.remove("open");
}
