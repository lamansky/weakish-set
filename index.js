'use strict'

const weakable = require('weakable')

const _set = Symbol('set')
const _strong = Symbol('strong')
const _weak = Symbol('weak')

module.exports = class WeakishSet {
  constructor (items) {
    this[_strong] = new Set()
    this[_weak] = new WeakSet()
  }

  [_set] (item) { return weakable(item) ? this[_weak] : this[_strong] }

  has (item) { return this[_set](item).has(item) }
  add (item) { return this[_set](item).add(item) }
  delete (item) { return this[_set](item).delete(item) }
  clear () { this[_strong].clear(); this[_weak] = new WeakSet() }

  entries (...args) { return this[_strong].entries(...args) }
  forEach (...args) { return this[_strong].forEach(...args) }
  values (...args) { return this[_strong].values(...args) }
}
