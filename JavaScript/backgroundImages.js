const bodyElement = document.querySelector('body');

function updateBackgroundImages() {
    if (bodyElement.classList.contains('lightmode')) {
        document.querySelector('.hero-section').style.backgroundImage = "url('./Images/BG_Contact.png')";
        document.querySelector('.contact').style.backgroundImage = "url('./Images/BG_Contact.png')";
    } else {
        document.querySelector('.hero-section').style.backgroundImage = "none";
        document.querySelector('.contact').style.backgroundImage = "none";
    }
}

// Initial update
updateBackgroundImages();

// Listen for theme changes
document.getElementById('toggle-theme').addEventListener('click', updateBackgroundImages);