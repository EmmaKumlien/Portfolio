document.addEventListener("DOMContentLoaded", () => {
    const cSharpLogo = document.getElementById("cSharp-logo");
    if (cSharpLogo) {
        console.log("C# logo element found");
        cSharpLogo.style.backgroundImage = `url("./Images/CSharp_logo.png")`;
        cSharpLogo.style.backgroundSize = "contain";
        cSharpLogo.style.backgroundRepeat = "no-repeat";
    } else {
        console.log("C# logo element not found");
    }
});