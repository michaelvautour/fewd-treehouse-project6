// 1. Create a multidimensional array to hold quiz questions and answers
const questions = [
  ['What planet do we live on?', 'earth'],
  ['What is the name of the energy element that heats the planet', 'sun'],
  ['What body orbits the earth?', 'moon']
];

// 2. Store the number of questions answered correctly

let answersQ = 0;

rightAnswers = [];
wrongAnswers = [];
/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

for (let i = 0; i < questions.length; i++) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(`${question}`);

  if (answer === response) {
    answersQ++;
    rightAnswers.push(`${question}`);
  } else {
    wrongAnswers.push(`${question}`);
  }
}

function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items
}

html = `
<h1>You got <strong>${answersQ}</strong> correct!</h1>
<p>These are the answers you got right</p>
<ol>
  ${createListItems(rightAnswers)}
</ol>
<p>These are the answers you got wrong</p>
<ol>
  ${createListItems(wrongAnswers)}
</ol>
`

// 4. Display the number of correct answers to the user
console.log(answersQ);

document.querySelector('main').innerHTML = html;