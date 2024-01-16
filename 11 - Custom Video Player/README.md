# Learning Notes

## The Video Embed Element

The `<video>` HTML element embeds a media player which supports video playback into the document.

In a similar manner to the `<img>` element, we include a path to the media we want to display inside the src attribute; we can include other attributes to specify information such as video width and height, whether we want it to autoplay and loop, whether we want to show the browser's default video controls, etc.

```html
<video controls width="250">
  <source src="/media/cc0-videos/flower.webm" type="video/webm" />

  <source src="/media/cc0-videos/flower.mp4" type="video/mp4" />

  Download the
  <a href="/media/cc0-videos/flower.webm">WEBM</a>
  or
  <a href="/media/cc0-videos/flower.mp4">MP4</a>
  video.
</video>
```

Implemented by the `<video>` element, the `HTMLVideoElement` interface provides special properties and methods for manipulating video objects. It also inherits properties and methods of `HTMLMediaElement` and `HTMLElement`.

More information about methods and instance properties are [here](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement).
