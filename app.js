const projectsPage = document.getElementById("projects-page");
const aboutPage = document.getElementById("about-page");

function router() {
  const currentUrl = window.location.hash || "#projects";
  if (currentUrl === "#about") {
    projectsPage.classList.add("hidden");
    aboutPage.classList.remove("hidden");
  } else {
    projectsPage.classList.remove("hidden");
    aboutPage.classList.add("hidden");
  }
}
