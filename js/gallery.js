// Находим элементы
const sliders = document.querySelector(".sliders");
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const slideNumber = document.querySelector(".slide-number");

// Текущий индекс слайда
let currentIndex = 0;

// Обновление номера слайда
const updateSlideNumber = () => {
  slideNumber.textContent = String(currentIndex + 1).padStart(2, "0");
};

// Переключение слайда
const goToSlide = (index) => {
  if (index < 0) {
    currentIndex = slides.length - 1; // Перемещаемся на последний слайд
  } else if (index >= slides.length) {
    currentIndex = 0; // Перемещаемся на первый слайд
  } else {
    currentIndex = index;
  }
  sliders.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateSlideNumber();
};

// Обработчики событий для кнопок
prevButton.addEventListener("click", () => {
  goToSlide(currentIndex - 1);
});

nextButton.addEventListener("click", () => {
  goToSlide(currentIndex + 1);
});

// Инициализация
updateSlideNumber();
