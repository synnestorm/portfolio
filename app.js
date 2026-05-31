const projectsPage = document.getElementById("projects-page");
const aboutPage = document.getElementById("about-page");
const introduction = document.querySelector(".introduction");

function router() {
  const currentHash = window.location.hash || "#projects";
  if (currentHash === "#about") {
    projectsPage.classList.add("hidden");
    aboutPage.classList.remove("hidden");
    introduction.classList.add("hidden");
  } else {
    projectsPage.classList.remove("hidden");
    aboutPage.classList.add("hidden");
    introduction.classList.remove("hidden");
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
