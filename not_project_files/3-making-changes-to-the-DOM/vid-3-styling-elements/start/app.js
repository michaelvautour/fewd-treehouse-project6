const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');

const input = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');

//My Solution
toggleList.addEventListener('click', () => {
  if (toggleList.innerText == 'Show List') {
    toggleList.textContent = 'Hide List';
    listDiv.style.display = 'block';
  }
  else {
    toggleList.textContent = 'Show List';
    listDiv.style.display = 'none';
  }
});

///////COURSE IMPLEMENTED IT AS FOLLOWS:
// toggleList.addEventListener('click', () => {
//   if (listDiv.style.display == 'none') {
//     toggleList.textContent = 'Hide List';
//     listDiv.style.display = 'block';
//   }
//   else {
//     toggleList.textContent = 'Show List';
//     listDiv.style.display = 'none';
//   }
// });

button.addEventListener('click', () => {
  p.innerHTML = input.value + ':';
});