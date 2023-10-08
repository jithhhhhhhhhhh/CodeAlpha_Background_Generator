const cssBackground = document.getElementById("css-background");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

const setGradient = () => {
    const gradientValue = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    body.style.background = gradientValue;
    cssBackground.textContent = gradientValue;
};

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// Initialize the gradient when the page loads
setGradient();
