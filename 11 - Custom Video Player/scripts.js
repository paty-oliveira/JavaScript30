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
  return video.paused ? video.play() : video.pause();
}

function skipVideo() {
  const secondsToSkip = this.dataset.skip;
  video.currentTime += parseFloat(secondsToSkip);
  video.play();
}

function updateButton() {
  const icon = this.paused ? "►" : "▐▐";
  toggle.textContent = icon;
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Play or Pause when click on the button or video container itself
toggle.addEventListener("click", playPause);
video.addEventListener("click", playPause);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

// Skip video time when click on skip buttons
// 10seconds and 20seconds
skipButtons.forEach((btn) => btn.addEventListener("click", skipVideo));

// Increase or Decrease video Volume
// Increase or Decrease video Playback Rate
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);

// Progress Bar
let mouseDown = false;
video.addEventListener("timeupdate", handleProgress);
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mouseDown && scrub(e));
progress.addEventListener("mousedown", () => (mouseDown = true));
progress.addEventListener("mouseup", () => (mouseDown = false));
