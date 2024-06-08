document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
    const cursorBackground = document.querySelector('.cursor-background');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    let isDarkMode = false;

    function setTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    function toggleTheme() {
        const currentTheme = localStorage.getItem('theme') || 'light';
        if (currentTheme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    function toggleDarkMode() {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-theme', isDarkMode);
        document.body.classList.toggle('light-theme', !isDarkMode);
        darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }

    darkModeToggle.addEventListener('click', toggleDarkMode);

    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.toggle("active", section.id === sectionId);
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetSection = this.getAttribute("href").substring(1);
            showSection(targetSection);
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
            const targetElement = document.getElementById(targetSection);
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Adjust the scrolling behavior
        });
    });
    

    showSection("about");
    document.querySelector("nav ul li a[href='#about']").classList.add("active");

    // Add event listeners for certificate boxes
    const certificates = document.querySelectorAll('.certificate');
    certificates.forEach(certificate => {
        certificate.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });

    // Highlight text on hover
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function () {
            this.style.color = 'var(--highlight-color)';
        });
        link.addEventListener('mouseout', function () {
            this.style.color = 'var(--text-color)';
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);})
    document.addEventListener('mousemove', (e) => {
        cursorBackground.style.top = `${e.clientY}px`;
        cursorBackground.style.left = `${e.clientX}px`;
    });
});
