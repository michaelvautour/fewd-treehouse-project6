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

const gameLength = phrases.length;

missedLetter = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

// listen for the start game button to be pressed
gameStart.addEventListener('click', (e) => {
    document.getElementById('overlay').style.display = 'none';
    getRandomPhraseAsArray;
});

//returns a random phrase from an array for the game
const getRandomPhraseAsArray = arr => {
    const randomPhrase = getRandomInt(gameLength);
    return randomPhrase;
}

// adds the letters of a string to the display
const addPhraseToDisplay = arr => {

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