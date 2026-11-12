// ANIMASI SAAT SCROLL
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(
    ".about, .skills, .projects, .contact"
);

hiddenElements.forEach((element) => {
    observer.observe(element);
});