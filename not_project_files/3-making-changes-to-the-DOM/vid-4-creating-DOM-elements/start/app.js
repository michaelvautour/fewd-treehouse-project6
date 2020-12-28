// 1a) to show & hide list
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');

// 2a) To change paragraph name
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');

// 3a) To add new paragraph name

const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

// 4a Remove item
const removeItemButton = document.querySelector('button.removeItemButton');


// 1b) function to trigger show/hide
toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

// 2b) to replace html in paragraph name
descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

// 3b) target UL elements, storing a variable to create new list items
// storing the input value into the li tag, and then appending it into the list
// in the end clearing the input field to allow for more entries
addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});

