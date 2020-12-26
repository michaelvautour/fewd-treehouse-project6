
// below is an object literal ( it's between {} vs. [] for arrays)
const person = {
    name: "Mike",
    city: 'Cold Lake',
    age: 37,
    isStudent: true,
    skills: ['JavaScript', 'HTML', 'CSS']
}

const message = `Hi, I'm ${person.name}. I am learning ${person.skills[0]}, ${person.skills[1]} and ${person.skills[2]}! I started this journey when I was ${person.age} from the city of ${person.city}. It is ${person.isStudent} I am a student!`

console.log(message);