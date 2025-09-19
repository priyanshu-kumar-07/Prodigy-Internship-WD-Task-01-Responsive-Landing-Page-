// Navbar scroll effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Active link highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Typing animation for hero text
const typingText = document.getElementById("typing-text");
const text = "Welcome to My Website";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typingText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();
