const toggleSwitch = document.querySelector("input[type=checkbox]");
const toggleText = document.querySelector(".toggle-text span");
const toggleIcon = document.querySelector(".toggle-text .fas");
const aboutImage1 = document.querySelector("#image1");
const aboutImage2 = document.querySelector("#image2");
const aboutImage3 = document.querySelector("#image3");
const menuBtn = document.querySelector(".menu-hamburger");
const navOverlay = document.querySelector(".nav-overlay");
const navModal = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-list a");

function switchToDarkMode() {
  toggleText.innerText = "Dark Mode";
  toggleIcon.classList.replace("fa-sun", "fa-moon");
  aboutImage1.src = "img/undraw_proud_coder_dark.svg";
  aboutImage2.src = "img/undraw_feeling_proud_dark.svg";
  aboutImage3.src = "img/undraw_conceptual_idea_dark.svg";
}

function switchToLightMode() {
  toggleText.innerText = "Light Mode";
  toggleIcon.classList.replace("fa-moon", "fa-sun");
  aboutImage1.src = "img/undraw_proud_coder_light.svg";
  aboutImage2.src = "img/undraw_feeling_proud_light.svg";
  aboutImage3.src = "img/undraw_conceptual_idea_light.svg";
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    switchToDarkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    switchToLightMode();
  }
}

toggleSwitch.addEventListener("change", switchTheme);

// Check local storage
const storage = localStorage.getItem("theme");
if (storage) {
  document.documentElement.setAttribute("data-theme", storage);
  if (storage === "dark") {
    switchToDarkMode();
    toggleSwitch.checked = true;
  } else {
    switchToLightMode();
    toggleSwitch.checked = false;
  }
}

menuBtn.addEventListener("click", () => {
  if (menuBtn.classList.contains("active")) {
    menuBtn.classList.remove("active");
    navOverlay.classList.remove("active");
    navModal.classList.remove("active");
    document.body.style.overflow = "auto";
  } else {
    menuBtn.classList.add("active");
    navOverlay.classList.add("active");
    navModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 600) {
    navOverlay.classList.remove("active");
    menuBtn.classList.remove("active");
    navModal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

navOverlay.addEventListener("click", (e) => {
  navOverlay.classList.remove("active");
  menuBtn.classList.remove("active");
  navModal.classList.remove("active");
  document.body.style.overflow = "auto";
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navOverlay.classList.remove("active");
    menuBtn.classList.remove("active");
    navModal.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});
