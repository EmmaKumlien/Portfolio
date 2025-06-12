document.addEventListener("DOMContentLoaded", () => {
    const scrollWrapper = document.querySelector(".scroll-wrapper");

    const handleResize = () => {
        if (scrollWrapper) {
            if (window.innerWidth >= 767) {
                if (!scrollWrapper.dataset.duplicated) {
                    const cloneContent = scrollWrapper.innerHTML;
                    scrollWrapper.insertAdjacentHTML("beforeend", cloneContent);
                    scrollWrapper.dataset.duplicated = "true"; // Markera att duplicering har skett
                }
                scrollWrapper.style.animation = ""; // Återaktivera animation
            } else {
                // För mindre skärmar, ta bort duplicerade element
                if (scrollWrapper.dataset.duplicated) {
                    const originalContent = scrollWrapper.innerHTML.slice(
                        0,
                        scrollWrapper.innerHTML.length / 2
                    );
                    scrollWrapper.innerHTML = originalContent;
                    delete scrollWrapper.dataset.duplicated; // Ta bort markeringen
                }
                scrollWrapper.style.animation = "none"; // Inaktivera animation
            }
        }
    };

    // Kör vid sidladdning
    handleResize();

    // Lyssna på fönstrets storleksändring
    window.addEventListener("resize", handleResize);
});