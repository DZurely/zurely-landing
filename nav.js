// Closes the mobile menu once a link inside it is tapped.
document.addEventListener("click", function (event) {
  if (!event.target.closest("#navLinks a")) return;
  const menu = document.getElementById("navLinks");
  if (menu) menu.classList.remove("open");
});

// The beta and local copies of the site send Agent Login to the test web app.
const TEST_WEB_HOSTS = ["beta-landing.zurely.my", "localhost", "127.0.0.1"];
if (TEST_WEB_HOSTS.includes(location.hostname)) {
  document.querySelectorAll('a[href^="https://web.zurely.my"]').forEach(function (link) {
    link.href = link.href.replace("//web.zurely.my", "//test-web.zurely.my");
  });
}
