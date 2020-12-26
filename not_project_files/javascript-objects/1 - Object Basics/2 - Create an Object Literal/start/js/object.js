
// below is an object literal ( it's between {} vs. [] for arrays)
const person = {
    name: "Michael",
    city: 'Cold Lake',
    age: 37,
    isStudent: true,
    skills: ['JavaScript', 'HTML', 'CSS']
}

person.nickname = 'Mike';
// using dot notation to access the object literals, combined with template literals
const message = `Hi, I'm ${person.name}, you can call me ${person.nickname}. I am learning ${person.skills[0]}, ${person.skills[1]} and ${person.skills[2]}! I started this journey when I was ${person.age} in the city of ${person.city}. It is ${person.isStudent} I am a student!`
const message1 = `Hi, I'm ${person.name}, you can call me ${person.nickname}. I am learning ${person.skills.join(', ')}! I started this journey when I was ${person.age}, just a few months shy from ${person.age + 1} in the city of ${person.city}. It is ${person.isStudent} I am a student!`

console.log(message);
console.log(message1);