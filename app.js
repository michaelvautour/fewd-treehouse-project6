console.log('app.js in project 6 test')
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const ul = document.querySelector('ul')
const gameStart = document.querySelector('.btn__reset');
const button = document.getElementsByTagName('button')

const phrases = [
"we are the children of humanity",
"barely competent and paranoid",
"battlestar galactica",
"you keep my planes flying",
"so say we all"
];

missedLetter = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

// listen for the start game button to be pressed, update so main screen disappears
// and new overlay exist with phrase pulled in
gameStart.addEventListener('click', (e) => {
    document.getElementById('overlay').style.display = 'none';
    addPhraseToDisplay();
});

//returns a random phrase from an array for the game
const getRandomPhraseAsArray = arr => {
    const gameLength = phrases.length;
    indexOfPhrase = getRandomInt(gameLength);
    console.log(indexOfPhrase);
    let charSplit = phrases[indexOfPhrase];
    let splitPhrase = charSplit.split('');
    return splitPhrase;
}

function addPhraseToDisplay() {
    const chars = getRandomPhraseAsArray()
    for (i = 0; i < chars.length; i++) {
        let char = chars[i];
        let createLi = document.createElement('li');
        createLi.textContent = char
            if (char === ' ') {
                createLi.classList.add('space');
            } else {
                createLi.classList.add('letter');
            }
        ul.appendChild(createLi)
        }
    }


// check if a letter is in the phrase
function checkLetter(selectedChar) {
    let match = null;
    const letters = ul.children;
    console.log(letters);
    for (i = 0; i < letters.length; i++) {
        let letter = letters[i];

        if (selectedChar === letter.textContent ){
            letter.classList.add('show');
            match = letter.textContent;
        }
    }
    return match;

}

// check if the game has been won or lost 
const checkWin = () => {
// code to validate if missedLetter > 4, go to gameove
// code to check the letter / show variable lengths if they are the same = win
}

// listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', (e) => {
    const pButton = e.target;
    let selectedChar = pButton.textContent;
 
   // need to update the below only for buttons, this and logic picking up div's!
    
    if (pButton.tagName === 'button');
        pButton.classList.add('chosen');
        // console.log(selectedChar + " qwerty area");
        let checkedLetter = checkLetter(selectedChar);
            if ( checkedLetter === selectedChar ) {
                console.log("you got a letter")
            } else {
                console.log("Wrong letter in Event Listener" + selectedChar)
                missedLetter +=1
                // code here to remove a heart
            }
    });