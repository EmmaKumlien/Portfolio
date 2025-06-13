document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".testimonial-grid");
    const cards = document.querySelectorAll(".testimonial-card");
    const cardWidth = cards[0].offsetWidth;
    let currentIndex = 0;
    
    const visibleCards = window.innerWidth >= 768 ? 3 : 1; 
    for (let i = 0; i < visibleCards; i++) {
        const clone = cards[i].cloneNode(true);
        grid.appendChild(clone);
    }

    function slideTestimonials() {
        currentIndex++;
        const offset = -currentIndex * cardWidth;
        grid.style.transition = "transform 1s ease";
        grid.style.transform = `translateX(${offset}px)`;

        if (currentIndex >= cards.length) {
            setTimeout(() => {
                grid.style.transition = "none";
                currentIndex = 0;
                grid.style.transform = `translateX(0px)`;
            }, 1000); 
        }
    }

    setInterval(slideTestimonials, 4000);
});