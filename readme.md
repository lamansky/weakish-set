# WeakishSet

It’s like WeakSet but it supports non-objects.

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm i weakish-map
```

## API

The module exposes a single class.

### Constructor

The constructor supports the following arguments:

1. Optional: `items` (iterable): Initial key-value pairs for the Set.
2. Optional: Object argument:
    * `StrongSet` (class): Set this if you have a custom Set class you want to use for storing non-objects. Defaults to the built-in `Set`.
    * `WeakSet` (class): Set this if you have a custom WeakSet class you want to use for storing objects. Defaults to the built-in `WeakSet`.

### Methods

Instances of this class have the following methods, which behave just like the corresponding methods on `Set` and `WeakSet`:

* `has()`
* `add()`
* `delete()`
* `clear()`

Instances also have methods which only work on non-objects:

* `entries()`
* `forEach()`
* `values()`

## Example

```javascript
// Before
const set1 = new WeakSet()
set1.add({})
set1.add('test') // Uncaught TypeError: Invalid value used in weak set

// After
const WeakishSet = require('weakish-set')
const set2 = new WeakishSet()
set2.add({})
set2.add('test')
```

## Related

* [weakish-map](https://github.com/lamansky/weakish-map)
