const elements = document.querySelectorAll(".reveal");
// when you see an element has the class "reveal" (in HTML file)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      // add this class "animate"
    }
  });
});
elements.forEach((el) => observer.observe(el));
// this code is for the animation only when scrool on an element has the class ".reveal", currently you never need to understand it

const icon = document.querySelector(".icon");
const menu = document.querySelector(".links ul");
icon.onclick = function (e) {
  menu.classList.toggle("open");
  e.stopPropagation();
};
document.onclick = function (e) {
  if (menu.classList.contains("open") && !menu.contains(e.target)) {
    menu.classList.remove("open");
  }
};
// this code is for the ".links ul" toggle, also currently you don't need to understand it
