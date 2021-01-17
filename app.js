console.log('app.js in project 6 test')
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const ul = document.querySelector('ul')
const gameStart = document.querySelector('.btn__reset');
const button = document.getElementsByTagName('button');
const heartLoss = document.querySelectorAll("img");
const overlay = document.getElementById('overlay');
const h2 = document.getElementsByClassName('title')[0];

//Game questions, add/edit additional ones as needed
//game is index so it will handle any amount of additional phrases
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
    const gameLength = arr.length;
    indexOfPhrase = getRandomInt(gameLength);
    console.log(indexOfPhrase);
    let charSplit = arr[indexOfPhrase];
    let splitPhrase = charSplit.split('');
    return splitPhrase;
}

function addPhraseToDisplay() {
    const chars = getRandomPhraseAsArray(phrases)
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
    let letterNum = document.getElementsByClassName('letter')
    console.log(letterNum.length);
    let showNum = document.getElementsByClassName('show')
    console.log(showNum.length);
    if (letterNum.length === showNum.length) {
        overlay.classList.add('win');
        overlay.style.display = "flex";
        h2.textContent = "Congrats! You Win! Refresh the browser to play again!";

    } else if (missedLetter > 4) {
        overlay.classList.add('lose');
        overlay.style.display = "flex";
        h2.textContent = "Sorry, you lose. Refresh the browser to play again!";
    }
}

// listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', (e) => {
    const pButton = e.target;
    let selectedChar = pButton.textContent;
   
    if (pButton.tagName === "BUTTON" && pButton.classList != "chosen") {
        pButton.classList.add('chosen');
        let checkedLetter = checkLetter(selectedChar);
            if ( checkedLetter === selectedChar ) {
                console.log("you got a letter");
                checkWin();
            } else {
                console.log("Non-matching letter selected is: " + selectedChar);
                heartLoss[missedLetter].src="images/lostHeart.png";
                missedLetter +=1;
                checkWin();
            }
}
});