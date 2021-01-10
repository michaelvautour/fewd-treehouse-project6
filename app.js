console.log('app.js in project 6 test')
const gameStart = document.querySelector('.btn__reset');

gameStart.addEventListener('click', (e) => {
    console.log("hello World");
    document.getElementById('.overlay').style.display = 'none';

});