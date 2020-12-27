 /*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/
const pets = [
  {
    name: 'Joey',
    type: 'Dog',
    breed: 'Australian Shepherd',
    age: 8,
    photo: 'img/aussie.jpg'
  },
  { 
    name: 'Patches',
    type: 'Cat',
    breed: 'Domestic Shorthair',
    age: 1,
    photo: 'img/tabby.jpg'
  },
  { 
    name: 'Pugsley',
    type: 'Dog',
    breed: 'Pug',
    age: 6,
    photo: 'img/pug.jpg'
  },
  { 
    name: 'Simba',
    type: 'Cat',
    breed: 'Persian',
    age: 5,
    photo: 'img/persian.jpg'
  },
  { 
    name: 'Comet',
    type: 'Dog',
    breed: 'Golden Retriever',
    age: 3,
    photo: 'img/golden.jpg'
  }
];

let html = '';

for (let i = 0; i < pets.length; i++) {
  // did the below assignment to prevent repeating [i] references through-out code
  let pet = pets[i];
  html+= `
  <h2>${pet.name}</h2>
  <h3>${pet.type} | ${pet.breed}</h3>
  <p>${pet.age}</p>
  <img src="${pet.photo}" alt="${pet.breed}"</img>
    `
}

document.querySelector('main').insertAdjacentHTML('beforeend', html);