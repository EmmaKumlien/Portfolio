document.addEventListener("DOMContentLoaded", () => {
    const menuBar = document.getElementById("menuBar");
    const navigationLinks = document.querySelector(".navigationLinks");
    const links = navigationLinks.querySelectorAll("a");

    // Handle menu toggle for smaller screens
    if (menuBar) {
        console.log("menuBar found");
        menuBar.addEventListener("click", () => {
            console.log("menuBar clicked");
            navigationLinks.classList.toggle("active");
        });
    } else {
        console.error("menuBar not found");
    }

    // Handle active link for all screen sizes
    links.forEach(link => {
        link.addEventListener("click", () => {
            console.log("Link clicked");

            // Remove 'active' class from all links
            links.forEach(nav => nav.classList.remove("active"));

            // Add 'active' class to the clicked link
            link.classList.add("active");

            // For smaller screens, close the menu after clicking a link
            if (navigationLinks.classList.contains("active")) {
                navigationLinks.classList.remove("active");
            }
        });
    });
});