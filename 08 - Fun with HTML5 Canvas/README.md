# Learning Notes

## Canvas API

The Canvas API provides a means for drawing graphics via JavaScript and the HTML `<canvas>` element. Among other things, it can be used for animation, game graphics, data visualization, photo manipulation, and real-time video processing.

The Canvas API largely focuses on 2D graphics. The WebGL API, which also uses the `<canvas>` element, draws hardware-accelerated 2D and 3D graphics.

```html
<canvas id="canvas"></canvas>
```

The `Document.getElementById()` method gets a reference to the HTML `<canvas>` element. Next, the `HTMLCanvasElement.getContext()` method gets that element's context - the thing onto which the drawing will be rendered.

The actual drawing is done using the `CanvasRenderingContext2D` interface.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);
```

More properties and methods from `HTMLCanvasElement` [here](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement).
