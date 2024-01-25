const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

const articles = ["A", "The", "An"];

const listContainer = document.getElementById("bands");

function removeArticle(title) {
  const words = title.split(" ");

  return articles.includes(words[0]) ? words.splice(1).join(" ") : title;
}

function compare(a, b) {
  return removeArticle(a) > removeArticle(b) ? 1 : -1;
}

bands.sort(compare);

listContainer.innerHTML = bands.map((band) => `<li>${band}</li>`).join("");
