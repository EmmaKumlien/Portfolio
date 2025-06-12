document.addEventListener("DOMContentLoaded", () => {
    const scrollWrapper = document.querySelector(".scroll-wrapper");
    let isContentDuplicated = false; // Track if content is already duplicated

    const toggleAnimation = () => {
        if (scrollWrapper) {
            if (window.innerWidth >= 767) {
                // Enable animation for larger screens
                if (!isContentDuplicated) {
                    const items = Array.from(scrollWrapper.children);
                    const wrapperWidth = scrollWrapper.offsetWidth;

                    // Duplicate content until it fills at least twice the wrapper's width
                    let totalContentWidth = scrollWrapper.scrollWidth;
                    while (totalContentWidth < wrapperWidth * 2) {
                        items.forEach((item) => {
                            const clone = item.cloneNode(true);
                            scrollWrapper.appendChild(clone);
                        });
                        totalContentWidth = scrollWrapper.scrollWidth; // Recalculate total width
                    }

                    isContentDuplicated = true; // Mark content as duplicated
                }
                const totalScrollWidth = scrollWrapper.scrollWidth;
                const animationDuration = totalScrollWidth / 50; // Adjust speed dynamically
                scrollWrapper.style.animation = `scroll ${animationDuration}s linear infinite`;
            } else {
                // Disable animation and remove duplicates for smaller screens
                scrollWrapper.style.animation = "none";
                if (isContentDuplicated) {
                    const originalContent = Array.from(scrollWrapper.children).slice(
                        0,
                        scrollWrapper.children.length / 2
                    );
                    scrollWrapper.innerHTML = ""; // Clear all content
                    originalContent.forEach((item) => scrollWrapper.appendChild(item)); // Restore original content
                    isContentDuplicated = false; // Mark content as not duplicated
                }
            }
        }
    };

    // Initial check
    toggleAnimation();

    // Add event listener for screen resizing
    window.addEventListener("resize", toggleAnimation);
});