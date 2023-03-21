const productsBtns = document.querySelectorAll(".product__btn");

productsBtns.forEach(el => {
  el.addEventListener("focus", (e) => {
    let parent = e.currentTarget.closest(".product__btns");
    parent.classList.add("btns--active");
  });
});