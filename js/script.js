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


// DARK MODE
const themeToggle = document.getElementById("themeToggle");

// Ambil tema yang tersimpan
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "☾";
        localStorage.setItem("theme", "light");
    }
});

// PROJECT FILTER
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filterValue = button.dataset.filter;

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        projectCards.forEach((card) => {
            const isMatch =
                filterValue === "all" ||
                card.dataset.category === filterValue;

            card.style.display = isMatch ? "grid" : "none";
        });
    });
});
