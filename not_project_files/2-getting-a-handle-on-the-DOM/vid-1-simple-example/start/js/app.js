const myHeading = document.getElementById('myHeading');

myHeading.addEventListener('click', () => {
    myHeading.style.color =  `rgb(${rgbColor()}, ${rgbColor()}, ${rgbColor()})`;
    // myHeading.insertAdjacentHTML("beforebegin", '<p>How did you do that?</p>');
});

function rgbColor() {
    return Math.floor(Math.random() * 256);
}