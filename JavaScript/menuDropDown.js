document.addEventListener("DOMContentLoaded", () => {
    const menuBar = document.getElementById("menuBar");
    const navigationLinks = document.querySelector(".navigationLinks");
    const links = navigationLinks.querySelectorAll("a");

    if (menuBar) {
        console.log("menuBar found");
        menuBar.addEventListener("click", () => {
            console.log("menuBar clicked");
            navigationLinks.classList.toggle("active");
        });
    } else {
        console.error("menuBar not found");
    }

    links.forEach(link => {
        link.addEventListener("click", () => {
            console.log("Link clicked");
            navigationLinks.classList.remove("active");
        });
    });
});