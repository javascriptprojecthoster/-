document.addEventListener("DOMContentLoaded", function () {
      // Scroll
  // Слайдер-main
  const scrollDot = document.querySelectorAll(".scroll__dot");
  const scrollWrapper = document.querySelector(".scroll__items");
  const scrollItem = document.querySelector(".scroll__item");
  const scrollItems = document.querySelectorAll(".scroll__item");
  const scrollLeft = document.querySelector(".scroll-left");
  const scrollRight = document.querySelector(".scroll-right");

  let introCard = 0;

  scrollLeft.addEventListener("click", function () {
    const dotItem = document.querySelector(".dote__active");
    const number = dotItem.dataset.dot__number;

    if(number == 0){
      introCard = scrollItems.length - 1
      for (const j of scrollDot) {
        j.classList.remove("dote__active")
      }
      document.querySelector('[data-dot__number="'+introCard+'"]').classList.add("dote__active")
    } else {
      introCard = number - 1
      for (const j of scrollDot) {
        j.classList.remove("dote__active")
      }
      document.querySelector('[data-dot__number="'+introCard+'"]').classList.add("dote__active")
    }

    style = window.getComputedStyle(scrollItem),
    marginRight = parseInt(style.getPropertyValue('margin-right'));

    const widthItem = scrollItem.clientWidth;

    const translate = -((introCard * widthItem) + (introCard * marginRight));
    scrollWrapper.style.transform = "translateX(" + translate + "px)";
  });

  scrollRight.addEventListener("click", function () {
    const dotItem = document.querySelector(".dote__active");
    const number = dotItem.dataset.dot__number;

    if(number == scrollItems.length - 1){
      introCard = 0
      for (const j of scrollDot) {
        j.classList.remove("dote__active")
      }
      document.querySelector('[data-dot__number="'+introCard+'"]').classList.add("dote__active")
    } else {
      introCard = +number + 1
      for (const j of scrollDot) {
        j.classList.remove("dote__active")
      }
      document.querySelector('[data-dot__number="'+introCard+'"]').classList.add("dote__active")
    }

    style = window.getComputedStyle(scrollItem),
    marginRight = parseInt(style.getPropertyValue('margin-right'));

    const widthItem = scrollItem.clientWidth;

    const translate = -((introCard * widthItem) + (introCard * marginRight));
    scrollWrapper.style.transform = "translateX(" + translate + "px)";
  });

  for (const i of scrollDot) {
    i.addEventListener("click", function () {
      const number = i.dataset.dot__number;

      for (const j of scrollDot) {
        j.classList.remove("dote__active")
      }

      i.classList.add("dote__active")

      style = window.getComputedStyle(scrollItem),
      marginRight = parseInt(style.getPropertyValue('margin-right'));

      const widthItem = scrollItem.clientWidth;

      const translate = -((number * widthItem) + (number * marginRight));
      scrollWrapper.style.transform = "translateX(" + translate + "px)";
    });
  }
  
  window.addEventListener('resize', function(){
    const currentDot = document.querySelector(".dote__active");
    const currentNumber = currentDot.dataset.dot__number;
    const widthItem = scrollItem.clientWidth;

    style = window.getComputedStyle(scrollItem),
    marginRight = parseInt(style.getPropertyValue('margin-right'));

    const translate = -((currentNumber * widthItem) + (currentNumber * marginRight));
    scrollWrapper.style.transform = "translateX(" + translate + "px)";
  })
});