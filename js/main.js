// ==========================================================
// main.js — keep this file tiny. Only small helpers live here.
// ==========================================================

// --- Mobile menu: open/close when the hamburger is clicked ---
const toggle = document.querySelector(".navbar__toggle");
const menu = document.querySelector(".navbar__menu");

toggle.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", isOpen);
});

// Close the mobile menu after a link is clicked
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", false);
  });
});

// --- Footer: show the current year automatically ---
document.getElementById("year").textContent = new Date().getFullYear();
