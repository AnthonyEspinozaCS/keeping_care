const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

function myFunction(number) {
  const bio = document.getElementById(`more-${number}`);
  const btnText = document.getElementById(`button-${number}`);
  const dots = document.getElementById(`dots-${number}`);
  const background = document.getElementById(`p-background-${number}`);
  console.log(number);
  bio.classList.toggle("hidden");
  dots.classList.toggle("hidden");
  background.classList.toggle("hidden");
  background.classList.toggle("d-block");
  if (btnText.innerText === "Read More") btnText.innerText = "Read Less";
  else btnText.innerText = "Read More";
}
