const redSlider = document.getElementById("red-slider");
const greenSlider = document.getElementById("green-slider");
const blueSlider = document.getElementById("blue-slider");
const hexInput = document.getElementById("hex-input");
const colorPreview = document.querySelector("body");

function updateColor() 
{
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;
    const hexValue = rgbToHex(redValue, greenValue, blueValue);
    const rgbColor = [redValue, greenValue, blueValue];
    const complementaryRgbColor = rgbColor.map(c => 255 - c);
    colorPreview.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    colorPreview.style.color=`rgb(${complementaryRgbColor[0]},${complementaryRgbColor[1]},${complementaryRgbColor[2]})`;
    hexInput.value = hexValue;
}

function rgbToHex(r, g, b) 
{
    const redHex = Number(r).toString(16).padStart(2, '0');
    const greenHex = Number(g).toString(16).padStart(2, '0');
    const blueHex = Number(b).toString(16).padStart(2, '0');
    return `#${redHex}${greenHex}${blueHex}`;
}

redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);
hexInput.addEventListener("input", () => 
{
    const hexValue = hexInput.value;
    const rgbValues = hexToRgb(hexValue);
    redSlider.value = rgbValues.r;
    greenSlider.value = rgbValues.g;
    blueSlider.value = rgbValues.b;
});
