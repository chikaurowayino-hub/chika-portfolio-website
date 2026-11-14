/* ==========================================================
   main.js – runs on EVERY page.
   1. Your social links (edit the two lines below)
   2. Mobile menu open/close
   3. Footer year
   ========================================================== */

/* 1. SOCIAL LINKS ------------------------------------------
   Paste your real profile URLs between the quotes.
   While a line is empty (""), the footer shows
   "LinkedIn – link coming soon" instead of a broken link.   */
const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/chika-urowayino-nduaguba-b16028216/",
  github: "https://github.com/chikaurowayino-hub"
};

/* This function looks for every <a data-social="..."> on the page
   and either gives it your link or marks it as "coming soon". */
function setupSocialLinks() {
  document.querySelectorAll("[data-social]").forEach(function (link) {
    const name = link.dataset.social;          // "linkedin" or "github"
    const url = SOCIAL_LINKS[name];
    if (url) {
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.removeAttribute("href");            // no fake link
      link.classList.add("pending-link");
      link.textContent = link.textContent + " (link coming soon)";
    }
  });
}

/* 2. MOBILE MENU -------------------------------------------
   The ☰ button adds/removes the class "open" on the menu.
   The CSS decides what "open" looks like.                    */
function setupMenu() {
  const button = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");
  if (!button || !menu) return;

  button.addEventListener("click", function () {
    const isOpen = menu.classList.toggle("open");
    button.setAttribute("aria-expanded", isOpen);
  });

  // Close the menu after tapping a link
  menu.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      menu.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    }
  });
}

/* 3. FOOTER YEAR ------------------------------------------- */
function setFooterYear() {
  const span = document.getElementById("year");
  if (span) span.textContent = new Date().getFullYear();
}

/* Start everything when the page has loaded */
document.addEventListener("DOMContentLoaded", function () {
  setupSocialLinks();
  setupMenu();
  setFooterYear();
});

/* ==========================================================
   4. LIGHT / DARK MODE
   The tiny script in each page's <head> already applied the saved
   theme before the page appeared. This code makes the button work:
   - toggles data-theme on <html> ("light" or "dark")
   - saves the choice in localStorage so every page remembers it
   - updates the button's accessible label and text
   ========================================================== */
const THEME_KEY = "chika-theme";

function currentTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

/* Update the button text and screen-reader label to describe the NEXT action */
function updateThemeButton() {
  const button = document.querySelector(".theme-toggle");
  if (!button) return;
  const isDark = currentTheme() === "dark";
  button.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  button.querySelector(".theme-label").textContent = isDark ? "Light" : "Dark";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  updateThemeButton();
}

function setupThemeToggle() {
  const button = document.querySelector(".theme-toggle");
  if (!button) return;
  updateThemeButton();

  button.addEventListener("click", function () {
    const next = currentTheme() === "dark" ? "light" : "dark";

    /* Add a helper class for a moment so colours fade smoothly */
    const root = document.documentElement;
    root.classList.add("theme-transition");
    applyTheme(next);
    window.setTimeout(function () { root.classList.remove("theme-transition"); }, 450);

    try { localStorage.setItem(THEME_KEY, next); } catch (error) { /* storage blocked: still works for this page */ }
  });

  /* If the theme is changed in another open tab, follow it */
  window.addEventListener("storage", function (event) {
    if (event.key === THEME_KEY) applyTheme(event.newValue === "dark" ? "dark" : "light");
  });
}

document.addEventListener("DOMContentLoaded", setupThemeToggle);
