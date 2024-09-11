let images = [
  {
    postnum: 1,
    postText: "Строительство железнодорожной магистрали Москва-Васюки",
    postnum2: 2,
    postText2:
      "Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов",
  },
  {
    postnum: 3,
    postText:
      "Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет",
  },
  {
    postnum: 4,
    postText: "Строительство дворца для турнира",
    postnum2: 5,
    postText2: "Размещение гаражей для гостевого автотранспорта",
  },
  {
    postnum: 6,
    postText:
      "Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов",
  },
  {
    postnum: 7,
    postText:
      "Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн",
  },
];

function initSlider() {
  if (!images || !images.length) return;

  let sliderImages = document.querySelector(".section-two-grid");
  let sliderArrows = document.querySelector(".control-hidden");
  let sliderDots = document.querySelector(".carousel-dotts");
  let prev = document.querySelector(".prev");
  let next = document.querySelector(".next");

  initImages();
  initDots();
  initArrows();

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="section-two-grid-item secret n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}">
                        
                        <div class="item-inner-inner">
                        <div class="item-number">${images[index].postnum}</div>
                            <div class="item-text">${
                              images[index].postText
                            }</div>
                        </div>
                            <div class="item-inner-inner">
                            ${
                              images[index].postnum2
                                ? `
                                  <div class="item-number">
                                    ${images[index].postnum2}
                                  </div>
                                  <div class="item-text">
                                    ${images[index].postText2}
                                  </div>
                                `
                                : `<div></div>`
                            }
                        </div>    
                    </div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }
  function initArrows() {
    sliderArrows
      .querySelectorAll(".carousel-button-hidden")
      .forEach((arrow, index) => {
        arrow.addEventListener("click", function () {
          let curNumber = +sliderImages.querySelector(".active").dataset.index;

          let nextNumber;
          let prev = arrow.classList.contains("prev");
          

          if (prev) {
            nextNumber = curNumber === 0 ? 0 : curNumber - 1;
          } else {
            nextNumber =
              curNumber === images.length - 1
                ? images.length - 1
                : curNumber + 1;
          }
          moveSlider(nextNumber);
        });
      });
  }

  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="carousel-dott n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".carousel-dott").forEach((dot) => {
      dot.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
    });
  }

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");

    if (sliderImages.querySelector(".active").classList.contains("n0")) {
      prev.classList.add("disabled");
    } else prev.classList.remove("disabled");

    if (sliderImages.querySelector(".active").classList.contains("n6")) {
      next.classList.add("disabled");
    } else next.classList.remove("disabled");

    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");

    changeTitle(num);
  }

  function changeTitle(num) {
    if (!images[num].postnum) return;
    document.querySelector(".item-number").innerText = images[num].postnum;
    document.querySelector(".item-text").innerText = images[num].postText;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initSlider();
});

// secondSlider///////////////////////////////////////////////////////////////////////

let slides = [
  {
    championImage: "./images/slide-img.png",
    championName: "Хозе-Рауль Капабланка",
    championTitle: "Чемпион мира по шахматам",
  },
  {
    championImage: "./images/slide-img.png",
    championName: "Эммануил Ласкер",
    championTitle: "Чемпион мира по шахматам",
  },
  {
    championImage: "./images/slide-img.png",
    championName: "Александр Алехин",
    championTitle: "Чемпион мира по шахматам",
  },
  {
    championImage: "./images/slide-img.png",
    championName: "Арон Нимцович",
    championTitle: "Чемпион мира по шахматам",
  },
  {
    championImage: "./images/slide-img.png",
    championName: "Рихард Рети",
    championTitle: "Чемпион мира по шахматам",
  },
];

function goSlider() {
  const slidesContainer = document.querySelector(".carousel-frame");

  const currentSlide = document.querySelector(".curent-slide");
  const otherCurrentSlide = document.querySelector(".current");
  const allSlides = document.querySelector(".all-slides");
  const otherAllSlides = document.querySelector(".all");
  let count = 1;
  let count2 = 3;
  otherCurrentSlide.innerText = count;
  currentSlide.innerText = count2;

  function initSlide() {
    slides.forEach((slide, index) => {
      let carouselSlide = `<div class="carousel-slide n${index}" data-index="${index}">
                                <div class="slide-image">
                                  <img src="${slides[index].championImage}" alt="slide-img">
                                </div>
                                <div class="slide-describe">
                                  <h3>${slides[index].championName}</h3>
                                  <p>${slides[index].championTitle}</p>
                                  <a href="#">Подробнее</a>
                                </div>
                              </div>`;
      slidesContainer.innerHTML += carouselSlide;
    });
  }

  initSlide();

  allSlides.innerText = slides.length;
  otherAllSlides.innerText = slides.length;

  const slide = document.querySelector(".carousel-slide");
  const prevButton = document.querySelector(".slide-arrow-prev");
  const nextButton = document.querySelector(".slide-arrow-next");
  const prevButton2 = document.querySelector(".arrow-prev");
  const nextButton2 = document.querySelector(".arrow-next");

  function moveForwardOne() {
    nextButton.addEventListener("click", () => {
      slidesContainer.style.scrollBehavior = "smooth";
      setTimeout(() => {
        slidesContainer.style.scrollBehavior = "unset";
      }, 4000);
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft += slideWidth;
      if (count2 < slides.length) {
        currentSlide.innerText = ++count2;
      }
    });
  }
  moveForwardOne();

  function moveBackOne() {
    prevButton.addEventListener("click", () => {
      slidesContainer.style.scrollBehavior = "smooth";
      setTimeout(() => {
        slidesContainer.style.scrollBehavior = "unset";
      }, 4000);
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft -= slideWidth;
      if (count2 > 3) {
        currentSlide.innerText = --count2;
      }
    });
  }
  moveBackOne();

  // *******************************************

  function moveForward() {
    nextButton2.addEventListener("click", () => {
      slidesContainer.style.scrollBehavior = "smooth";
      setTimeout(() => {
        slidesContainer.style.scrollBehavior = "unset";
      }, 4000);
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft += slideWidth;
      if (count < slides.length) {
        otherCurrentSlide.innerText = ++count;
      }
    });
  }

  moveForward();

  function moveBack() {
    prevButton2.addEventListener("click", () => {
      slidesContainer.style.scrollBehavior = "smooth";
      setTimeout(() => {
        slidesContainer.style.scrollBehavior = "unset";
      }, 4000);
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft -= slideWidth;
      if (count > 1) {
        otherCurrentSlide.innerText = --count;
      }
    });
  }

  moveBack();
}

document.addEventListener("DOMContentLoaded", function () {
  goSlider();
});
