# Learning Notes

## SpeechRecognition

The Web Speech API enables you to incorporate voice data into web apps. The Web Speech API has two parts: `SpeechSynthesis`, and `SpeechRecognition`.

Speech recognition is accessed via the `SpeechRecognition` interface, which provides the ability to recognize voice context from an audio input and respond appropriately. Generally you'll use the interface's constructor to create a new `SpeechRecognition` object, which has a number of event handlers available for detecting when speech is input through the device's microphone. The `SpeechGrammar` interface represents a container for a particular set of grammar that your app should recognize. Grammar is defined using [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/).

### Example

In our example, we create a new `SpeechRecognition` object instance using the `SpeechRecognition()` constructor, create a new `SpeechGrammarList`, and set it to be the grammar that will be recognized by the `SpeechRecognition` instance using the `SpeechRecognition.grammars` property.

After some other values have been defined, we then set it so that the recognition service starts when a click event occurs. When a result has been successfully recognized, the `result` event fires, we extract the color that was spoken from the event object, and them set the background color of the `<html>` element to that color.

```js
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const diagnostic = document.querySelector(".output");
const bg = document.querySelector("html");

document.body.onclick = () => {
  recognition.start();
  console.log("Ready to receive a color command.");
};

recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}`;
  bg.style.backgroundColor = color;
};
```

More information about methods and instance properties [here](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition).
