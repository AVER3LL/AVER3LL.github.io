const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

let darkmode = localStorage.getItem("darkmode");
const themeSwitcher = document.getElementById("theme-switcher");

const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkmode", "active");
};

if (darkmode === "active") {
  enableDarkMode();
}

const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkmode", null);
};

themeSwitcher.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkMode() : disableDarkMode();
});

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

