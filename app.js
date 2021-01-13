console.log('app.js in project 6 test')
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');

const gameStart = document.querySelector('.btn__reset');

const phrases = [
"Tomorrow is going to be amazing",
"What shall we ever do",
"Battlestar Galactica is a great show",
"Whatever works for you",
"Hello World is simple but effective"
];

// const gameLength = phrases.length;
// const indexOfPhrase = Math.floor(Math.random() * Math.floor(gameLength));

missedLetter = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

// listen for the start game button to be pressed, update so main screen disappears
gameStart.addEventListener('click', (e) => {
    document.getElementById('overlay').style.display = 'none';
});

//returns a random phrase from an array for the game
const getRandomPhraseAsArray = phrases => {
    const gameLength = phrases.length;
    const indexOfPhrase = Math.floor(Math.random() * Math.floor(gameLength));
    console.log(indexOfPhrase);
    return indexOfPhrase;
}

// adds the letters of a string to the display
function addPhraseToDisplay() {
    for (let i = 0; i < phrase.length; i++){
        let ul = document.getElementsByTagName('ul')[0]
        let li = document.createElemement('li')
        ul.appendChild(li);

        if (character = letter) {
            // this would create the LI with a class of letter and 1 char
            let someClass= letter;
    }
        else {
            // this would create the LI with a class of space and an empty string char

            let someClass = space
        }
}

// check if a letter is in the phrase
const checkLetter = button => {

}

// check if the game has been won or lost 
const checkWin = () => {

}

// listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', () => {

})
