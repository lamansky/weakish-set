'use strict'

const weakable = require('weakable')

const _set = Symbol('set')
const _strong = Symbol('strong')
const _weak = Symbol('weak')
const _WeakSet = Symbol('WeakSet')

module.exports = class WeakishSet {
  constructor (items = [], {StrongSet: Strong = Set, WeakSet: Weak = WeakSet} = {}) {
    this[_strong] = new Strong()
    this[_weak] = new Weak()
    this[_WeakSet] = Weak
    for (const item of items) this.add(item)
  }

  [_set] (item) { return weakable(item) ? this[_weak] : this[_strong] }

  has (item) { return this[_set](item).has(item) }
  add (item) { return this[_set](item).add(item) }
  delete (item) { return this[_set](item).delete(item) }
  clear () { this[_strong].clear(); this[_weak] = new this[_WeakSet]() }

  entries (...args) { return this[_strong].entries(...args) }
  forEach (...args) { return this[_strong].forEach(...args) }
  values (...args) { return this[_strong].values(...args) }
}
