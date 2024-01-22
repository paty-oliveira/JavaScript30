# Learning Notes

## Object References and Copying

One of the fundamental differences of objects versus primitives is that objects are stored and copied by
memory reference, whereas primitive values: strings, numbers, booleans, etc - are always copied "as a whole value".

```js
let message = "Hello!";
let phrase = message;
```

As a result we have two independent variables, each one storing the string `"Hello!"`;

![Primitives diagram](./assets/primitives.png)

Objects are no like that.

A variable assigned to an object stores not the object itself, but its address in memory - a reference.
When an object variable is copied, the reference is copied, but the object itself is not duplicated.

```js
let user = { name: "John" };

let admin = user; // copy the reference
```

Now we have two variables, each storing a reference to the same object:

![Objects diagram](./assets/objects.png)

As you can see, there's still one object, but now with two variables that reference it. We can use either
variable to access the object and modify uts contents:

```js
let user = { name: "John" };

let admin = user;

admin.name = "Pete"; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference
```

So, to avoid undesired side effects, we need to make a clone of the object and not pointing to the same
memory reference.

```js
let user = {
  name: "John",
  age: 30,
};

let clone = Object.assign({}, user);

alert(clone.name); // John
alert(clone.age); // 30
```

or using spread operator:

```js
let user = {
  name: "John",
  age: 30,
};

let clone = { ...user };
clone.name = "Paty";

console.log(user.name); //John
console.log(clone.name); //Paty
```
