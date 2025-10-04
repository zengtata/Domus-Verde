document.addEventListener('DOMContentLoaded', function() {

    // --- GÖRGÉSRE MEGJELENŐ ANIMÁCIÓK ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Késleltetés beolvasása a data-delay attribútumból
                const delay = entry.target.dataset.delay || 0;

                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, delay);

                // Miután az animáció lefutott, már nem figyeljük az elemet
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Az elem 10%-a láthatóvá válik
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // --- HEADER MEGJELENÉSÉNEK VÁLTOZÁSA GÖRGÉSRE ---
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

});
