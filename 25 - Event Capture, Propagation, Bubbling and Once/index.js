const divs = document.querySelectorAll("div");
const button = document.querySelectorAll("button");

function logText(e) {
  e.stopPropagation; // stop bubbling
  console.log(this.classList.value);
}

divs.forEach((div) =>
  div.addEventListener("click", logText, {
    capture: true,
  })
);

button.addEventListener("click", logText, { once: true });
