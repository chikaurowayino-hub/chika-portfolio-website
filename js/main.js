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
  linkedin: "",   // e.g. "https://www.linkedin.com/in/your-profile"
  github: ""      // e.g. "https://github.com/your-username"
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
