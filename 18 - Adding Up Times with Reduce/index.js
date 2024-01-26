const timeNodes = [...document.querySelectorAll("[data-time]")];

const seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    const [minutes, seconds] = timeCode.split(":").map(parseFloat);

    return minutes * 60 + seconds;
  })
  .reduce((total, videoSeconds) => total + videoSeconds, 0);

let secondsLeft = seconds;
const hours = Math.floor(seconds / 3600);
secondsLeft %= 3600;

const minutes = Math.floor(secondsLeft / 60);
secondsLeft %= 60;

console.log(hours, minutes, secondsLeft);
