# Learning Notes

## Console

The `console` object provides access to the debugging console. The `console` object can be accessed from any global object. It's exposed as `Window.console`, and can be referenced as `console`.

```js
console.log("Failed to open the specified link");
```

### console.assert()

Log a message and stack trace to console if the first element is `false`.

### console.clear()

Clear the console.

### console.count()

Log the number of times this line has been called with the given label.

### console.debug()

Outputs a message to the console with the log level debug.

### console.dir()

Displays an interactive listing of the properties of a specified JavaScript object. This listing lets you use disclosure triangles to examine the contents of child objects.

### console.error()

Outputs an error message. You may use string substitution and additional arguments with this method.

### console.group()

Creates a new inline group, indenting all following output by another level. To move back out a level, call `console.groupEnd()`.

### console.groupEnd()

Exits the current inline group.

### console.groupCollapsed()

Creates a new inline group, indenting all following output by another level. However, unlike `console.group()` this starts with the inline group collapsed requiring the use of a disclosure button to expand it. To move back out a level, call `console.groupEnd()`.

### console.info()

Informative logging of information. You may use string substitution and additional arguments with this method.

### console.log()

For general output of logging information. You may use string substitution and additional arguments with this method.

### console.table()

Display tabular data as a table.

### console.time()

Starts a timer with a name specified as an input parameter.

### console.timeEnd()

Stops the specified timer and logs the elapsed time in milliseconds since it started.

### console.warn()

Outputs a warning message. You may use string substitution and additional arguments with this method.

More information about `console` object [here](https://developer.mozilla.org/en-US/docs/Web/API/console).
