document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".testimonial-grid");
    const cards = document.querySelectorAll(".testimonial-card");
    const cardWidth = cards[0].offsetWidth;
    let currentIndex = 0;

    // Clone the first few cards to create an infinite loop effect
    const visibleCards = window.innerWidth >= 768 ? 3 : 1; // 3 for large screens, 1 for small screens
    for (let i = 0; i < visibleCards; i++) {
        const clone = cards[i].cloneNode(true);
        grid.appendChild(clone);
    }

    function slideTestimonials() {
        currentIndex++;
        const offset = -currentIndex * cardWidth;
        grid.style.transition = "transform 1s ease"; // Slower transition (1 second)
        grid.style.transform = `translateX(${offset}px)`;

        // Reset position when reaching the cloned cards
        if (currentIndex >= cards.length) {
            setTimeout(() => {
                grid.style.transition = "none";
                currentIndex = 0;
                grid.style.transform = `translateX(0px)`;
            }, 1000); // Match the transition duration
        }
    }

    setInterval(slideTestimonials, 4000); // Slide every 4 seconds
});