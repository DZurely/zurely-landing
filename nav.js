// Closes the mobile menu once a link inside it is tapped.
document.addEventListener("click", function (event) {
  if (!event.target.closest("#navLinks a")) return;
  const menu = document.getElementById("navLinks");
  if (menu) menu.classList.remove("open");
});
