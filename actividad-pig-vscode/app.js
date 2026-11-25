"use strict";

// Los ajustes se aplican al documento completo mediante variables CSS.
const root = document.documentElement;
const smaller = document.querySelector("#text-smaller");
const larger = document.querySelector("#text-larger");
const background = document.querySelector("#change-background");
const displayStatus = document.querySelector("#display-status");

const textSizes = [90, 100, 110, 125, 140];
const themes = [
  { key: "original", label: "original" },
  { key: "sand", label: "arena" },
  { key: "sky", label: "azul claro" },
];
let textIndex = 1;
let themeIndex = 0;

function changeTextSize(step) {
  textIndex = Math.max(0, Math.min(textSizes.length - 1, textIndex + step));
  const percentage = textSizes[textIndex];
  root.style.setProperty("--type-scale", percentage / 100);
  smaller.disabled = textIndex === 0;
  larger.disabled = textIndex === textSizes.length - 1;
  displayStatus.textContent = `Tamaño de letra: ${percentage} %.`;
}

smaller.addEventListener("click", () => changeTextSize(-1));
larger.addEventListener("click", () => changeTextSize(1));
background.addEventListener("click", () => {
  themeIndex = (themeIndex + 1) % themes.length;
  const theme = themes[themeIndex];
  root.dataset.background = theme.key;
  displayStatus.textContent = `Color de fondo: ${theme.label}.`;
});

const navigation = document.querySelector("#navigation");
const menuToggle = document.querySelector(".menu-toggle");
const desktop = window.matchMedia("(min-width: 992px)");

function setMenu(open) {
  navigation.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
}

menuToggle.addEventListener("click", () => setMenu(!navigation.classList.contains("is-open")));
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation.classList.contains("is-open")) {
    setMenu(false);
    menuToggle.focus();
  }
});
desktop.addEventListener("change", () => setMenu(false));

// La validación de campos la realiza el navegador. No hay servidor ni envíos.
document.querySelectorAll("form[data-demo-message]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.querySelector(".form-status").textContent = form.dataset.demoMessage;
  });
  form.querySelector("button[type=submit]").disabled = false;
});
