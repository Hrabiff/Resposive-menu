const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");
// const navigationItem = document.querySelectorAll("nav-item");

// navigationItem.addEventListener("mouseenter", () => {
//   navigationItem.style.transform = "scale(1.1)";
// });

// navigationItem.addEventListener("mouseleave", () => {
//   navigationItem.style.transform = "scale(1)";
// });

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});
