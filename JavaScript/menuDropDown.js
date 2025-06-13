document.addEventListener("DOMContentLoaded", () => {
    const menuBar = document.getElementById("menuBar");
    const navigationLinks = document.querySelector(".navigationLinks");
    const links = navigationLinks.querySelectorAll("a");
    const logo = document.querySelector("#home-btn");

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

            links.forEach(nav => nav.classList.remove("active"));

            link.classList.add("active");


            if (navigationLinks.classList.contains("active")) {
                navigationLinks.classList.remove("active");
            }
        });
    });

    if (logo) {
        logo.addEventListener("click", () => {
            console.log("Logo clicked");

            links.forEach(nav => nav.classList.remove("active"));
        });
    }
});