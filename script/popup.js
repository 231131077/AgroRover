const popup = document.querySelector(".popup");
const close = document.querySelector(".close");

window.onload = function () {
  setTimeout(() => {
    popup.style.display = "block";
  }, 0);
};

close.addEventListener("click", () => {
  popup.style.display = "none";
});
