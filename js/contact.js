/* ==========================================================
   contact.js – validates the form, then sends it to Netlify.
   Rules: no empty field, valid email, phone = digits only.
   IMPORTANT: a success message is shown ONLY when Netlify
   confirms it received the message.
   ========================================================== */

const contactForm = document.getElementById("contact-form");
const statusBox = document.getElementById("form-status");

/* Show a message above the form. type = "ok", "bad" or "info" */
function showStatus(type, text) {
  statusBox.className = "form-status " + type;
  statusBox.textContent = text;
  statusBox.hidden = false;
  statusBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* Put an error under one field (or clear it with "") */
function setError(fieldName, message) {
  const input = contactForm.elements[fieldName];
  document.getElementById(fieldName + "-error").textContent = message;
  input.parentElement.classList.toggle("invalid", message !== "");
}

/* Check one field and return an error message ("" means OK) */
function checkField(name) {
  const value = contactForm.elements[name].value.trim();
  if (value === "") return "This field cannot be empty.";
  if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value))
    return "Enter a valid email address, like name@example.com.";
  if (name === "phone" && !/^[0-9]+$/.test(value))
    return "Use digits only (0-9), with no spaces, + or dashes.";
  return "";
}

/* Check all four fields; return true only if all pass */
function validateAll() {
  let allGood = true;
  ["name", "email", "phone", "message"].forEach(function (name) {
    const message = checkField(name);
    setError(name, message);
    if (message !== "") allGood = false;
  });
  return allGood;
}

/* Live feedback: re-check a field when the visitor leaves it */
["name", "email", "phone", "message"].forEach(function (name) {
  contactForm.elements[name].addEventListener("blur", function () {
    setError(name, checkField(name));
  });
});

/* Running on your own computer (Live Server) or opened as a file? */
function isLocal() {
  return ["localhost", "127.0.0.1", ""].includes(location.hostname);
}

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  statusBox.hidden = true;

  if (!validateAll()) {
    showStatus("bad", "Please fix the highlighted fields and try again.");
    return;
  }

  /* Netlify does not run on Live Server, so nothing can be delivered here. */
  if (isLocal()) {
    showStatus("info", "Validation passed. Messages are only delivered once the site is live on Netlify, so nothing was sent from this test version.");
    return;
  }

  /* Real submission: Netlify expects a normal form POST to "/" */
  const data = new URLSearchParams(new FormData(contactForm)).toString();
  const button = contactForm.querySelector("button[type=submit]");
  button.disabled = true;
  button.textContent = "Sending...";

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: data
  })
    .then(function (response) {
      if (!response.ok) throw new Error("Netlify returned " + response.status);
      contactForm.reset();
      showStatus("ok", "Thank you. Your message was received and I will reply by email.");
    })
    .catch(function () {
      showStatus("bad", "Your message could not be sent. Please try again, or email me directly at chikaurowayino@gmail.com.");
    })
    .finally(function () {
      button.disabled = false;
      button.textContent = "Send message";
    });
});
