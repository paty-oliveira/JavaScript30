# Learning Notes

## classList Property

The `Element.classList` is a read-only property that returns a live `DOMTokenList` collection of the `class` attributes of the element. This can be used to manipulate the class list.

Using `classList` is a convenient alternative to accessing an element's list of classes.

Although the `classList` property itself is read-only, you can modify its associated `DOMTokenList` using the `add()`, `remove()`, `replace()`, and `toggle()` methods.

The `toggle()` method of the `DOMTokenlist` interface removes an existing token from the list and returns false. If the token does not exist it's added and the function returns `true`.

```js
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) =>
  panel.addEventListener("click", () => {
    this.classList.toggle("open");
  })
);
```
