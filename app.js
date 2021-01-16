console.log('app.js in project 6 test')
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const ul = document.querySelector('ul')

const gameStart = document.querySelector('.btn__reset');

const phrases = [
"Tomorrow is going to be amazing",
"What shall we ever do",
"Battlestar Galactica is a great show",
"Whatever works for you",
"Hello World is simple but effective"
];

missedLetter = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

// listen for the start game button to be pressed, update so main screen disappears
gameStart.addEventListener('click', (e) => {
    document.getElementById('overlay').style.display = 'none';
    addPhraseToDisplay()
});

//returns a random phrase from an array for the game
const getRandomPhraseAsArray = arr => {
    const gameLength = phrases.length;
    indexOfPhrase = getRandomInt(gameLength)
    console.log(indexOfPhrase);
    let charSplit = phrases[indexOfPhrase]
    let splitPhrase = charSplit.split('')
    return splitPhrase;
}

function addPhraseToDisplay() {
    const chars = getRandomPhraseAsArray()
    for (i = 0; i < chars.length; i++) {
        let char = chars[i]
        let createLi = document.createElement('li')
        createLi.textContent = char
            if (char === ' ') {
                createLi.classList.add('space')
            } else {
                createLi.classList.add('letter')
            }
        ul.appendChild(createLi)
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

});
