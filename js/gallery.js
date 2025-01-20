// Отримуємо всі необхідні елементи
const slides = document.querySelectorAll(".slide"); // Всі слайди
const prevButton = document.getElementById("prev"); // Кнопка "Назад"
const nextButton = document.getElementById("next"); // Кнопка "Вперед"
const slideNumber = document.querySelector(".slide-number"); // Елемент для номера слайда

let currentIndex = 0; // Початковий індекс слайда

// Оновлення відображення слайдів
function updateSlides() {
  slides.forEach((slide, index) => {
    slide.style.display = index === currentIndex ? "block" : "none";
  });
  updateSlideNumber();
  updateButtonsState();
}

// Оновлення номера слайда
function updateSlideNumber() {
  if (slideNumber) {
    slideNumber.textContent = String(currentIndex + 1).padStart(2, "0");
  }
}

// Оновлення стану кнопок
function updateButtonsState() {
  if (prevButton) {
    prevButton.disabled = currentIndex === 0 || currentIndex === 1; // Вимкнути кнопку на 1-му слайді
  }
  if (nextButton) {
    nextButton.disabled = currentIndex === slides.length - 1; // Вимкнути кнопку на останньому слайді
  }
}

// Перехід до наступного слайда
function goToNextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlides();
  }
}

// Перехід до попереднього слайда
function goToPrevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlides();
  }
}

// Додаємо обробники подій
if (nextButton) {
  nextButton.addEventListener("click", goToNextSlide);
}
if (prevButton) {
  prevButton.addEventListener("click", goToPrevSlide);
}

// Ініціалізація слайдера
document.addEventListener("DOMContentLoaded", () => {
  if (slides.length === 0) {
    console.error("Слайди не знайдені!");
    return;
  }
  updateSlides();
});
