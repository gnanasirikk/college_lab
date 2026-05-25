const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Feature coming soon!");
  });
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.12)";
  } else {
    navbar.style.boxShadow = "0 2px 12px rgba(0, 0, 0, 0.06)";
  }
});