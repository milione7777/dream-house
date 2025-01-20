document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".circle");
  const sections = document.querySelectorAll(".container-section > .page");

  // Функція для визначення активної секції
  const updateActiveCircle = () => {
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.top < window.innerHeight / 2;

      if (isVisible) {
        // Оновлюємо класи активних кружків
        circles.forEach((circle) => circle.classList.remove("active"));
        if (circles[index]) {
          circles[index].classList.add("active");
        }
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Коли слайд потрапляє у видиму область
          slides.forEach((slide, index) => {
            if (slide === entry.target) {
              currentIndex = index; // Оновлюємо поточний індекс
              updateSlideNumber(); // Оновлюємо номер слайда
              slide.classList.add("visible"); // Додаємо клас для появи
            } else {
              slide.classList.remove("visible"); // Приховуємо інші слайди
            }
          });
        }
      });
    },
    {
      root: null, // Спостерігаємо у всій видимій області
      threshold: 0.5, // Слайд вважається видимим, якщо 50% його площі у вікні
    }
  );

  // Додаємо слухач для прокрутки
  document
    .querySelector(".container-section")
    .addEventListener("scroll", updateActiveCircle);

  // Додаємо події на натискання кружків
  circles.forEach((circle, index) => {
    circle.addEventListener("click", () => {
      // Прокручуємо до відповідної секції
      sections[index].scrollIntoView({ behavior: "smooth" });
    });
  });
});
