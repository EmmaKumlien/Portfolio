document.addEventListener("DOMContentLoaded", () => {
    const menuBar = document.getElementById("menuBar");
    const navigationLinks = document.querySelector(".navigationLinks");

    menuBar.addEventListener("click", () => {
        navigationLinks.classList.toggle("active");
    });
});