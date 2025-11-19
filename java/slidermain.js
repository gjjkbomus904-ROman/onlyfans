const slides = document.querySelector(".slides");
const slideImages = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;
let interval;

// Показ слайда по индексу
function showSlide(index) {
  if (index >= slideImages.length) current = 0;
  else if (index < 0) current = slideImages.length - 1;
  else current = index;

  // Смещаем контейнер
  slides.style.transform = `translateX(-${current * 100}%)`;

  // Обновляем точки
  dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
}

// Следующий / предыдущий
function nextSlide() {
  showSlide(current + 1);
}

function prevSlide() {
  showSlide(current - 1);
}

// Автоматическая прокрутка
function startAutoSlide() {
  interval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
  clearInterval(interval);
}

// Обработчики
nextBtn.addEventListener("click", () => {
  stopAutoSlide();
  nextSlide();
  startAutoSlide();
});

prevBtn.addEventListener("click", () => {
  stopAutoSlide();
  prevSlide();
  startAutoSlide();
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    stopAutoSlide();
    showSlide(i);
    startAutoSlide();
  });
});

// Инициализация
showSlide(0);
startAutoSlide();
