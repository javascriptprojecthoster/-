document.addEventListener("DOMContentLoaded", function () {
  const moreButton = document.querySelector(".header__item_last");
  const moreContent = document.querySelector(".more");

  moreButton.addEventListener("click", function () {
    moreContent.classList.toggle("more__open");
  });

window.addEventListener('resize', function(){
  if(document.documentElement.clientWidth < 1071){
    moreContent.classList.remove("more__open");
  }
})

  document.addEventListener("click", (e) => {
    if (moreContent.classList.contains("more__open")) {
      const withinContent = e.composedPath().includes(moreContent);

      if (!withinContent && e.target != moreButton) {
        moreContent.classList.remove("more__open"); // скрываем элемент т к клик был за его пределами
      }
    }
  });

  // Input
  const inputSearch = document.querySelector(".input__search");
  const searchButton = document.querySelector(".search__button");

  searchButton.addEventListener('click', function(){
    inputSearch.classList.add('input__search-open')
  })
  document.addEventListener("click", (e) => {
    if (inputSearch.classList.contains("input__search-open")) {
      const withinContent = e.composedPath().includes(inputSearch);

      if (!withinContent && e.target) {
        inputSearch.classList.remove('input__search-open') // скрываем элемент т к клик был за его пределами
      }
    }
  });

  // Burger 
  const burger = document.querySelector(".burger__menu");
  const burgerClose = document.querySelector(".close__icon");
  const burgerOpen = document.querySelectorAll(".burger__open");

  burgerClose.addEventListener('click', function(){
    burger.classList.add('burger__menu-close')
  })

  for (const i of burgerOpen) {
    i.addEventListener('click', function(){
      burger.classList.remove('burger__menu-close')
    })
  }
  window.addEventListener('resize', function(){
    if(document.documentElement.clientWidth > 801){
      burger.classList.add('burger__menu-close')
    }
  })

  const burgerLink = document.querySelectorAll(".main__a");

  for (const i of burgerLink) {
    i.addEventListener('click', function(){
      i.nextElementSibling.classList.toggle('burger__item-close')
    })
  }

  // Login & Sign 
  const sign = document.querySelector(".sign");
  const login = document.querySelector(".login");
  const headerLogin = document.querySelector('#toLogin')
  const loginButton = document.querySelector(".button__signup");

  document.addEventListener("click", (e) => {
    if (!login.classList.contains("none")) {
      const withinContent = e.composedPath().includes(login);

      if (!withinContent && e.target != headerLogin) {
        login.classList.add("none");
      }
    }
  });
  
  document.addEventListener("click", (e) => {
    if (!sign.classList.contains("none")) {
      const withinContent = e.composedPath().includes(sign);

      if (!withinContent && e.target != loginButton && e.target != document.querySelector(".product-pc[data-unauthorized] button") && e.target != document.querySelector(".product__tablet[data-unauthorized] button")) {
        sign.classList.add("none");
      }
    }
  });

  headerLogin.addEventListener('click', function(){
    login.classList.remove('none')
  })

  loginButton.addEventListener('click', function(){
    login.classList.add('none')
    sign.classList.remove('none')
  })

  // Select 
  const selectHeader = document.querySelectorAll('.select__header')
  const selectItem = document.querySelectorAll('.select__item')

  for (const i of selectHeader) {
    i.addEventListener('click', function(){
      this.parentElement.classList.toggle('is-active')
    })
  }

  for (const i of selectItem) {
    i.addEventListener('click', function(){
      let text = this.innerText
      let select = this.closest('.select')
      let currentText = select.querySelector('.select__current')

      currentText.innerText = text

      select.classList.remove('is-active')
    })
  }
});
