const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// Create a clone of the Array
const newPlayersCopy = [...players];
console.log(newPlayersCopy);

// Create an Array with the same memory reference
const playersCopy = players;

players[0] = "paty";

console.log(players);
console.log(playersCopy);

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// Create a clone of the Object
const newPersonCopy = { ...person };
console.log(newPersonCopy);

// Create an Object with the same memory reference
const personCopy = person;

person.name = "Paty";

console.log(person);
console.log(personCopy);
