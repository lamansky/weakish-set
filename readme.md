# WeakishSet

It’s like WeakSet but it supports non-objects.

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm i weakish-map
```

## Usage

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
