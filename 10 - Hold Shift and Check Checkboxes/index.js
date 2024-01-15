const inputFields = document.querySelectorAll('input[type="checkbox"]');

let lastChecked;

function handleCheckbox(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    inputFields.forEach((input) => {
      if (input === this || input === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        input.checked = true;
      }
    });
  }

  lastChecked = this;
}

inputFields.forEach((input) => {
  input.addEventListener("click", handleCheckbox);
});
