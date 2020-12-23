

const inStock = [
    'pizza',
    'cookies',
    'eggs', 
    'apples', 
    'milk', 
    'cheese', 
    'bread', 
    'lettuce', 
    'carrots', 
    'broccoli', 
    'potatoes', 
    'crackers', 
    'onions', 
    'tofu', 
    'limes', 
    'cucumbers'];
const search = prompt('Search for a product.');
let message;

// This will set the array to lower case to allow for a lower case to
// lower case comparison during the if else
for (let i=0; i < inStock.length; i++) {
    inStock[i] = inStock[i].toLowerCase();
  }

// This will make is to the searched array string will output as first 
// letter capital and remainder lower case
function capitalFirst(string) {
    for (i = 0; i < string.length; i++) {
        string1 = string.toLowerCase();
    }
    return string.charAt(0).toUpperCase() + string1.slice(1);
}

// This will compare the users search criteria against the array for a match
if (inStock.includes(search.toLowerCase())) {
    message = `Your item <strong>${capitalFirst(search)}</strong> is in stock!`
} else {
    message = `Your item <strong>${capitalFirst(search)}</strong> is not in stock!"`
}

document.querySelector('main').innerHTML = `<p>${message}</p>`;