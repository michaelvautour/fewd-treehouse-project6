const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');


// This is to change color using button

// myButton.addEventListener('click', () => {
//     myHeading.style.color =  `rgb(${rgbColor()}, ${rgbColor()}, ${rgbColor()})`;
//     // myHeading.insertAdjacentHTML("beforebegin", '<p>How did you do that?</p>');
// });

// This is to change color text

myButton.addEventListener('click', () => {
    myHeading.style.color = myTextInput.value;
    // myHeading.insertAdjacentHTML("beforebegin", '<p>How did you do that?</p>');
});

function rgbColor() {
    return Math.floor(Math.random() * 256);
}