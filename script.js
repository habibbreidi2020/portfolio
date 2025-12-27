const sections = document.querySelectorAll("section");

const revealSections = () => {
    const triggerPoint = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerPoint) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    toggleBtn.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
        navbar.style.top = "-70px";
    } else {
        navbar.style.top = "0";
    }

    lastScroll = currentScroll;
});
