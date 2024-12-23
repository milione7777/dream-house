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
