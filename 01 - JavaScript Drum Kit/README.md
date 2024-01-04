# Learning Notes

## The Keyboard Input element

The `<kdb>` HTML element represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device.

### Example

**HTML**

`<p>Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render an MDN page.</p>`

**Output**

<p>Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render an MDN page.</p>

## The Embed Audio element

The `<audio>` HTML element is used to embed sound content in documents. It may contain one or more audio sources, represented using the `src` attribute or the `<source>` element. We can include other attributes to specify informations such as whether we want it to autoplay and loop, whether we want to show the browser's default audio controls, etc.

The `<audio>` element has no intrinsic visual output of its own unless the controls attribute is specified, in which case the browser's default controls are shown.

The default controls have a display value of inline by default, and it is often a good idea to set the value to block to improve control over positioning and layout, unless you want it to sit within a text block or similar.

### Example

**HTML**
`<audio src="./sounds/boom.wav" controls></audio>`

**Output**
<audio controls src="./sounds/boom.wav"></audio>

### HTML Audio DOM Reference

The `HTMLAudioElement` interface provides access to the properties of `<audio>` elements, as well as methods to manipulate them. This element is based on, and inherits properties and methods from the `HTMLMediaElement` interface. The `HTMLMediaElement` interface adds to `HTMLElement` the properties and methods needed to support basic media-related capabilities.

## Events related to Keyboard and CSS Transition

Events are fired to notify code of some kind of change that may affect code execution. These can arise from user interactions such as using a mouse or resizing a window, changes in the stage, and other causes.

Each event is represented by an object that is based on the `Event` interface.

### Keyboard Event Type

Events related to using a keyboard. Used to notify when keys are moved up, down, or just pressed.

`KeyboardEvent` objects describe a user interaction with the keyboard; each event describes a single interaction between the user and a key on the keyboard. The event type **keydown**, **keypress**, or **keyup** identifies what kind of keyboard activity occurred.

More information about `KeyboardEvent` object [here](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent).

### CSS Transition Event Type

Events related to CSS Transitions. Provides notification events when CSS transitions start, stop, are cancelled, etc.

The `TransitionEvent` object represents an event in relation with a transition. There are some event types such as: **transitioncancel**, **transitionend**, **transitionrun** or **transitionstart**.

More information about `TransitionEvent` object [here](https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent).
