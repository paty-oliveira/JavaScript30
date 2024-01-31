# Learning Notes

## Geolocation API

The Geolocation API allows the user to provide their location to web applications if they so desire.

The Geolocation API is accessed via a call to `navigator.geolocation`; this will cause the user's browser to ask them for permission to access their location data. If they accept, then the browser will use the best available functionality on the device to access this information.

The developer can now access this location information in a couple of different ways:

- `Geolocation.getCurrentPosition()`: Retrieves the device's current location.
- `Geolocation.watchPosition()`: Registers a handler function that will be called automatically each time the position of the device changes, returning the updated location.

In both cases, the method call takes up to three arguments:

- A mandatory success callback: if the location retrieval is successful, the callback executes with a `GeolocationPosition` object as its only parameter, providing access to the location data.

- An optional error callback: if the location retrieval is unsuccessful, the callback executes with a `GeolocationPositionError` object as its only parameter, providing access information on what went wrong.

- An optional object which provides options for retrieval of the position data.

```js
let id;
let target;
let options;

function success(pos) {
  const crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log("Congratulations, you reached the target");
    navigator.geolocation.clearWatch(id);
  }
}

function error(err) {
  console.error(`ERROR(${err.code}): ${err.message}`);
}

target = {
  latitude: 0,
  longitude: 0,
};

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
};

id = navigator.geolocation.watchPosition(success, error, options);
```
