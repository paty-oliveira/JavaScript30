const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// is at least one person 19 or older?

function isOlderThan(birthdayYear, age) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthdayYear >= age;
}

const isSomeoneOlderThan19 = people.some((person) =>
  isOlderThan(person.year, 19)
);
console.log(isSomeoneOlderThan19);

// is everyone 19 or older?
const isEveryoneOlderThan19 = people.every((person) =>
  isOlderThan(person.year, 19)
);
console.log(isEveryoneOlderThan19);

// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const id = 823423;
const selectedId = comments.find((comment) => comment.id === id);
console.log(selectedId.text);

// Find the comment with this ID
// delete the comment with the ID of 823423

const commentIndex = comments.findIndex((comment) => comment.id === id);
const filteredComments = comments.filter(
  (comment, index) => index !== commentIndex
);
console.log(filteredComments);
