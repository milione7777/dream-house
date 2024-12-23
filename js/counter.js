// Елементи прогресу
const circle = document.querySelector(".progress-ring__circle");
const progressValue = document.getElementById("progress-value");
const priceElement = document.getElementById("price");
const counterElement = document.getElementById("counter");
const dot = document.getElementById("progress-dot"); // Точка

// Кнопки
const eliteBtn = document.querySelector(".position-area");
const vipBtn = document.querySelector(".position-area-2");
const extraBtn = document.querySelector(".position-area-3");

// Константа для довжини кола
const RADIUS = 140;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// Ініціалізація кола
circle.style.strokeDasharray = CIRCUMFERENCE;
circle.style.strokeDashoffset = CIRCUMFERENCE;

// Функція для оновлення прогресу
function setProgress(percent, price) {
  const offset = CIRCUMFERENCE - (percent / 100) * CIRCUMFERENCE;
  circle.style.strokeDashoffset = offset; // Анімація кола
  progressValue.textContent = `${percent}`;
  priceElement.textContent = price; // Оновлення ціни
  counterElement.textContent = percent; // Оновлення лічильника

  // Логіка для показу точки
  if (percent < 100) {
    const angle = (percent / 100) * 360; // Кут розташування точки
    const radians = (angle - 90) * (Math.PI / 180); // Переведення в радіани
    const x = Math.cos(radians) * RADIUS + 150; // Координата X
    const y = Math.sin(radians) * RADIUS + 150; // Координата Y
    dot.style.opacity = 1; // Показати точку
    dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
  } else {
    dot.style.opacity = 0; // При 100% точка зникає
  }

  // Налаштування позиції лічильника
  if (percent > 99) {
    counterElement.style.left = "24%";
  } else if (percent > 0) {
    counterElement.style.left = "28%";
  } else {
    counterElement.style.left = "38%";
  }
}

// Обробники подій для кнопок
eliteBtn.addEventListener("click", () => setProgress(100, "12 500 000"));
vipBtn.addEventListener("click", () => setProgress(50, "10 500 000"));
extraBtn.addEventListener("click", () => setProgress(25, "8 000 000"));

// Ініціалізація
document.addEventListener("DOMContentLoaded", () => setProgress(0, "0"));
