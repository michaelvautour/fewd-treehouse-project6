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

for (let i=0; i < inStock.length; i++) {
    inStock[i] = inStock[i].toLowerCase();
  }

if (inStock.includes(search.toLowerCase())) {
    console.log(`Your item ${search} is in stock!`)
} else {
    console.log(`Your item ${search} is not in stock!"`);
}
