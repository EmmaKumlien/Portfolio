document.addEventListener("DOMContentLoaded", () => {
    const cSharpLogo = document.getElementById("cSharp-logo");
    if (cSharpLogo) {
        console.log("C# logo element found");
        const imagePath = "./Images/CSharp_logo.png";
        cSharpLogo.style.backgroundImage = `url("${imagePath}")`;
        cSharpLogo.style.backgroundSize = "contain";
        cSharpLogo.style.backgroundRepeat = "no-repeat";
    } else {
        console.log("C# logo element not found");
    }
});