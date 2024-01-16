// Get our elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// Build out function
function playPause() {
  if (video.paused) {
    return video.play();
  }
  return video.pause();
}

function skipVideo() {
  const secondsToSkip = this.dataset.skip;
  video.currentTime += parseInt(secondsToSkip);
  video.play();
}

// Play or Pause when click on the button or video container itself
toggle.addEventListener("click", playPause);
video.addEventListener("click", playPause);

// Skip video time when click on skip buttons
// 10seconds and 20seconds
skipButtons.forEach((btn) => btn.addEventListener("click", skipVideo));
