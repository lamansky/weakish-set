# WeakishSet

It’s like WeakSet but it supports non-objects. A Node.js module.

This module requires an environment that supports WeakSet. If you need a WeakSet shim, look elsewhere.

## Installation

```bash
npm install weakish-set --save
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
