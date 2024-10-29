/* FrontEnd List */
const searsDevExperience = document.getElementById("SearsFrontEnd");
const devListExperience = searsDevExperience.nextElementSibling;

const toggleDevExperience = () => {
  devListExperience.classList.toggle("hidden");
  searsDevExperience.lastElementChild.classList.toggle("rotate-180");
};
searsDevExperience.addEventListener("click", toggleDevExperience);

/* QA List */
const searsQaExperience = document.getElementById("SearsQa");
const qaListExperience = searsQaExperience.nextElementSibling;

const toggleQaExperience = () => {
  qaListExperience.classList.toggle("hidden");
  searsQaExperience.lastElementChild.classList.toggle("rotate-180");
};
searsQaExperience.addEventListener("click", toggleQaExperience);

/* Removing # from url when nav links are clicked */
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const targetId = event.target.getAttribute("data-scroll-to");
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      targetId === "home"
        ? history.pushState(null, null, `/`)
        : history.pushState(null, null, `/${targetId}`);
    }
  });
});
