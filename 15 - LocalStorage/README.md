# Learning Notes

## Local Storage

The `localStorage` read-only property of the `window` interface allows you to access a `Storage` object for the `Document`; the stored data is saved across browser sessions.

`localStorage` is similar to `sessionStorage`, except that while `localStorage` data has no expiration time, `sessionStorage` data gets cleared when the page session end - that is, when the page is closed.

More information about `Storage` properties and methods instance [here](https://developer.mozilla.org/en-US/docs/Web/API/Storage).

The following snippet accesses the current domain's local `Storage` object and adds a data item to it using `Storage.setItem()`.

```js
localStorage.setItem("myCat", "Tom");
```

The syntax for reading the `localStorage` item is as follows:

```js
const cat = localStorage.getItem("myCat");
```

The syntax for removing the `localStorage` item is as follows:

```js
localStorage.removeItem("myCat");
```

The syntax for removing all the `localStorage` items is as follows:

```js
localStorage.clear();
```

## Event Delegation

It is an event-handling pattern that allows you to handle events at higher level in the DOM tree other than
the level where the event was first received.

By default, events triggered on an element propagate up the DOM tree to the element's parent, its ancestors, and on up until the root element (`html`).

```html
<div>
  <span>
    <button>Click Me!</button>
  </span>
</div>
```

Here we have a `div` which is a parent of a `span` which in turn is a parent of the `button` element.

Due to event bubbling, when the button receives an event, say click, that event bubbles up the tree, so `span` and `div` will respectively receive the event also.

With event delegation, instead of handling the click event on the `button`, you can handle it on the `div`.

The idea is that you "delegate" the handling of an event to a different element (in this case, the div, which is a parent element) instead of the actual element (the button) that received the event.

Here's what I mean by that in code:

```js
const div = document.getElementsByTagName["div"](0);
div.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    console.log("button was clicked");
  }
});
```

The `event` object has a `target` property which contains information about the element that actually received the event. On `target.tagName`, we get the name of the tag for the element, and we check if it's `BUTTON`.

With this code, when you click the `button`, the event bubbles up to the `div` which handles the event.

Event Delegation is a useful pattern that allows you to write cleaner code, and create fewer event listeners with similar logic.
