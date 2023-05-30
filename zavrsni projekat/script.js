// * SELECTING

// & Search
let searchIcon = document.querySelector(".icon");
let searchInput = document.querySelector(".input");
let x = document.querySelector("#x");

// & Content
let contents = document.querySelectorAll(".content");

// & Arrows
let allLeftArrows = document.querySelectorAll(".leftArrow");
let allRightArrows = document.querySelectorAll(".rightArrow");

// & Counter
let i = 0;

const displayNone = () => {
  contents.forEach((content) => (content.style.display = "none"));
};

const arrow = (e) => {
  let box = e.target.closest(".box");
  let primary = box.querySelector(".primary");
  let secondary = box.querySelector(".secondary");
  primary.classList.toggle("hidden");
  secondary.classList.toggle("hidden");
};

allRightArrows.forEach((rightArrow) => {
  rightArrow.addEventListener("click", (e) => {
    arrow(e);
  });
});
allLeftArrows.forEach((leftArrow) => {
  leftArrow.addEventListener("click", (e) => {
    arrow(e);
  });
});

// & Search Animacija
const searchAnimation = function () {
  searchInput.style.animationName = "search";
  searchInput.style.animationDuration = "1s";
  searchInput.style.animationFillMode = "forwards";
  searchInput.style.display = "block";
  searchIcon.style.display = "none";
  x.style.display = "block";
  x.style.color = "black";
};
// & Druga Animacija Search-a kada se klikne X button
const secondSearchAnimation = function () {
  searchIcon.style.display = "block";
  x.style.display = "none";
  searchInput.style.display = "none";
};

// ^ Dodavanje Search Animacija na event
searchIcon.addEventListener("click", searchAnimation);
x.addEventListener("click", secondSearchAnimation);

$(".carousel").carousel({
  interval: 7000,
});
