document.addEventListener("DOMContentLoaded", () => {
    const cSharpLogo = document.getElementById("cSharp-logo");
    if (cSharpLogo) {
        console.log("C# logo element found");
        const imagePath = `${window.location.origin}/Images/CSharp_logo.png`; // Dynamic path
        cSharpLogo.style.backgroundImage = `url("${imagePath}")`;
        cSharpLogo.style.backgroundSize = "contain";
        cSharpLogo.style.backgroundRepeat = "no-repeat";
    } else {
        console.warn("C# logo element not found");
    }
});