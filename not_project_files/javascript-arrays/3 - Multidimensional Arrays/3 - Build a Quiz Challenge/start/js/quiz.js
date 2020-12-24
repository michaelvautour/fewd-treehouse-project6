// 1. Create a multidimensional array to hold quiz questions and answers

const questions = [
  ['What planet do we live on?', 'earth'],
  ['What is the name of the energy element that heats the planet', 'sun'],
  ['What body orbits the earth?', 'moon']
];

// 2. Store the number of questions answered correctly

let correctAnswers = 0;
/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

let rightAnswers = [];
let wrongAnswers = [];

for ( let i = 0; i < questions.length; i++ ) {
  let question = questions[i][0];
  let answer = questions[i][1];
  let response = prompt(question);

  if (response === answer) {
    correctAnswers++;
    rightAnswers.push(question); 
  } else {
    wrongAnswers.push(question);
  }
}

function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items
}

// 4. Display the number of correct answers to the user

let html = `
<h1>You got ${correctAnswers} question(s) correct </h1>
<p>You got these questions right:</p>
<ol>
${createListItems(rightAnswers)}
</ol>
<p>You got these questions wrong</p>
<ol>
${createListItems(wrongAnswers)}
</ol>
`

document.querySelector('main').innerHTML = html;
