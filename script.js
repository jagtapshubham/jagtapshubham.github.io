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

/* QA List */
const mphatekQaExperience = document.getElementById("mphatekQa");
const mphatekqaListExperience = mphatekQaExperience.nextElementSibling;

const togglemphatekQaExperience = () => {
  mphatekqaListExperience.classList.toggle("hidden");
  mphatekQaExperience.lastElementChild.classList.toggle("rotate-180");
};
mphatekQaExperience.addEventListener("click", togglemphatekQaExperience);

/* QA List */
const tudipQaExperience = document.getElementById("tudipQa");
const tudipqaListExperience = tudipQaExperience.nextElementSibling;

const toggletudipQaExperience = () => {
  tudipqaListExperience.classList.toggle("hidden");
  tudipQaExperience.lastElementChild.classList.toggle("rotate-180");
};
tudipQaExperience.addEventListener("click", toggletudipQaExperience);

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
