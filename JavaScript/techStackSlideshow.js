document.addEventListener("DOMContentLoaded", () => {
    const scrollWrapper = document.querySelector(".scroll-wrapper");
    let isContentDuplicated = false;

    const toggleAnimation = () => {
        if (scrollWrapper) {
            if (window.innerWidth >= 767) {

                if (!isContentDuplicated) {
                    const items = Array.from(scrollWrapper.children);
                    const wrapperWidth = scrollWrapper.offsetWidth;

                    let totalContentWidth = scrollWrapper.scrollWidth;
                    while (totalContentWidth < wrapperWidth * 2) {
                        items.forEach((item) => {
                            const clone = item.cloneNode(true);
                            scrollWrapper.appendChild(clone);
                        });
                        totalContentWidth = scrollWrapper.scrollWidth;
                    }

                    isContentDuplicated = true;
                }
                const totalScrollWidth = scrollWrapper.scrollWidth;
                const animationDuration = totalScrollWidth / 50; 
                scrollWrapper.style.animation = `scroll ${animationDuration}s linear infinite`;
            } else {
                scrollWrapper.style.animation = "none";
                if (isContentDuplicated) {
                    const originalContent = Array.from(scrollWrapper.children).slice(
                        0,
                        scrollWrapper.children.length / 2
                    );
                    scrollWrapper.innerHTML = "";
                    originalContent.forEach((item) => scrollWrapper.appendChild(item));
                    isContentDuplicated = false; 
                }
            }
        }
    };


    toggleAnimation();

    window.addEventListener("resize", toggleAnimation);
});