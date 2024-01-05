# Learning Notes

## Input element of type color

`<input>` elements of type color provide a user interface element that lets a user specify a color, either by using a visual color picker interface or by entering the color into a text field in #rrggbb hexadecimal format.

Example:

```
<p>Choose your monster's colors:</p>

<div>
  <input type="color" id="head" name="head" value="#e66465" />
  <label for="head">Head</label>
</div>

<div>
  <input type="color" id="body" name="body" value="#f6b73c" />
  <label for="body">Body</label>
</div>
```

## Updating CSS variables using Javascript

Here's a CSS variable:

```css
:root {
  --mouse-x: 0px;
  --mouse-y: 0px;
}
```

Perhaps you use them to set a position:

```css
.mover {
  left: var(--mouse-x);
  top: var(--mouse-y);
}
```

To update those values from JavaScript, you’d:

```js
let root = document.documentElement;

root.addEventListener("mousemove", (e) => {
  root.style.setProperty("--mouse-x", e.clientX + "px");
  root.style.setProperty("--mouse-y", e.clientY + "px");
});
```
