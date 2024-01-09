# Learning Notes

## Array.filter()

The `filter()` method of Array instances created a shallow copy of a portion of a given array, filtered down to just the elements fom the given array that pass the test implemented by the provided function.

```js
const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
```

## Array.map()

The `map()` method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array. If you don't use the return value of `map()`, use `forEach()` or a `for...of loop` instead.

```js
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
```

## Array.sort()

The `sort()` method of Array instances sort the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

To sort the elements in an array without mutating the original array, use `toSorted()`.

```js
const values = [1, 10, 21, 2];

const sortedValues = values.sort();

console.log(sortedValues);
// Expected output: [1, 2, 10, 21]
```

The `sort()` method can receive a callback function that acts as `compareFn`. The return value should be a number whose indicates the relative order of the two elements: negative if `a` is less than `b`, positive if `a` is greater than `b`, and zero if they are equal. `NaN` is treated as 0.

- `> 0`: sort `a` after `b`, e.g. `[b, a]`
- `< 0`: sort `a` before `b`, e.g. `[a, b]`
- `=== 0`: keep the original order of `a` and `b`

## Array.reduce()

The `reduce()` method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be user in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of 0).

```js
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10
```
