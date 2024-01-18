const secretCode = "paty";
const pressedKeys = [];

function addPressedKey(key) {
  pressedKeys.push(key);
}

function trimPressedKeysList() {
  const start = secretCode.length - 1;
  const end = pressedKeys.length - secretCode.length;
  pressedKeys.splice(-start, end);
}

function hasSecretCode() {
  return pressedKeys.join("").includes(secretCode);
}

function handleSequenceDetection(e) {
  addPressedKey(e.key);
  trimPressedKeysList();

  return hasSecretCode() ? cornify_add() : null;
}

window.addEventListener("keyup", handleSequenceDetection);
