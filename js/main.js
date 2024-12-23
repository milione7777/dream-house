document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const options = {
    root: null,
    threshold: 0.1,
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-visible");
      } else {
        entry.target.classList.remove("section-visible");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".class-item");
  const eliteElement = document.querySelector(".elite");
  const vipElement = document.querySelector(".vip");
  const extraElement = document.querySelector(".extra");

  items.forEach((item) => {
    // Когда элемент получает фокус
    item.addEventListener("focus", () => {
      items.forEach((otherItem) => {
        if (otherItem === item) {
          // Увеличиваем ширину и меняем изображение для текущего элемента
          otherItem.style.width = "980px";
          const hoverImg = otherItem.getAttribute("data-hover-img");
          otherItem.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('${hoverImg}')`;

          if (otherItem.classList.contains("class-item-1")) {
            eliteElement.style.marginLeft = "60px";
          }
          if (otherItem.classList.contains("class-item-2")) {
            vipElement.style.marginLeft = "65px";
          }
          if (otherItem.classList.contains("class-item-3")) {
            extraElement.style.marginLeft = "65px";
          }

          // Изменение margin-left для .elite, если фокус на class-item-2
          if (otherItem.classList.contains("class-item-2")) {
            eliteElement.style.marginLeft = "60px";
          }
          if (otherItem.classList.contains("class-item-2")) {
            extraElement.style.marginLeft = "150px";
          }
          if (otherItem.classList.contains("class-item-1")) {
            vipElement.style.marginLeft = "200px";
          }
          if (otherItem.classList.contains("class-item-1")) {
            extraElement.style.marginLeft = "150px";
          }
          if (otherItem.classList.contains("class-item-3")) {
            eliteElement.style.marginLeft = "60px";
          }
          if (otherItem.classList.contains("class-item-3")) {
            vipElement.style.marginLeft = "200px";
          }
        } else {
          // Уменьшаем ширину для остальных элементов
          otherItem.style.width = "470px";
        }
      });
    });

    // Когда элемент теряет фокус
    item.addEventListener("blur", () => {
      // Сбрасываем размеры и изображения
      items.forEach((otherItem) => {
        otherItem.style.width = "640px";
        const defaultImg = otherItem.getAttribute("data-default-img");
        otherItem.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('${defaultImg}')`;

        // Сбрасываем margin-left для .elite
        eliteElement.style.marginLeft = "";
      });
    });
  });
});
