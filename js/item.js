document.addEventListener("DOMContentLoaded", function () {
  const textAuthorizedPC = document.querySelectorAll(
    ".product__right.product-pc[data-authorized] p"
  );
  const textUnAuthorizedPC = document.querySelector(
    ".product__right.product-pc[data-unauthorized] .access__text"
  );

  const textAuthorized = document.querySelectorAll(
    ".product__right.product__tablet[data-authorized] p"
  );
  const textUnAuthorized = document.querySelector(
    ".product__right.product__tablet[data-unauthorized] .access__text"
  );

  const dataAuthorizedPC = document.querySelector(
    ".product__right.product-pc[data-authorized]"
  );
  const dataUnAuthorizedPC = document.querySelector(
    ".product__right.product-pc[data-unauthorized]"
  );

  const dataAuthorized = document.querySelector(
    ".product__right.product__tablet[data-authorized]"
  );
  const dataUnAuthorized = document.querySelector(
    ".product__right.product__tablet[data-unauthorized]"
  );

  for (const i of textAuthorizedPC) {
    i.addEventListener("click", function () {
      dataAuthorizedPC.classList.add("none");
      dataUnAuthorizedPC.classList.remove("none");
    });
  }
  textUnAuthorizedPC.addEventListener("click", function () {
    dataAuthorizedPC.classList.remove("none");
    dataUnAuthorizedPC.classList.add("none");
  });
  for (const i of textAuthorized) {
    i.addEventListener("click", function () {
      dataAuthorized.classList.add("none");
      dataUnAuthorized.classList.remove("none");
    });
  }
  textUnAuthorized.addEventListener("click", function () {
    dataAuthorized.classList.remove("none");
    dataUnAuthorized.classList.add("none");
  });






  // Login & Sign 
  const sign = document.querySelector(".sign");
  let productPCSign = document.querySelector(".product-pc[data-unauthorized] button");
  let productTabletSign = document.querySelector(".product__tablet[data-unauthorized] button");

  
  productPCSign.addEventListener('click', function(){
    sign.classList.remove('none')
  })
  productTabletSign.addEventListener('click', function(){
    sign.classList.remove('none')
  })

  
});
