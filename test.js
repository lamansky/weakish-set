'use strict'

const assert = require('assert')
const WeakishSet = require('.')

describe('WeakishSet', function () {
  it('should support adding initial items', function () {
    const obj = {}
    const set = new WeakishSet([1, 2, obj])
    assert(set.has(1))
    assert(set.has(2))
    assert(set.has(obj))
    assert.strictEqual(Array.from(set.values()).length, 2)
  })

  describe('add()', function () {
    it('should work for objects', function () {
      const set = new WeakishSet()
      set.add({})
    })

    it('should work for strings', function () {
      const set = new WeakishSet()
      set.add('test')
    })
  })

  describe('has()', function () {
    it('should work for objects', function () {
      const set = new WeakishSet()
      const obj = {}
      set.add(obj)
      assert(set.has(obj))
    })

    it('should work for strings', function () {
      const set = new WeakishSet()
      const str = 'test'
      set.add(str)
      assert(set.has(str))
    })
  })

  describe('delete()', function () {
    it('should work for objects', function () {
      const set = new WeakishSet()
      const obj = {}
      set.add(obj)
      assert(set.has(obj))
      set.delete(obj)
      assert(!set.has(obj))
    })

    it('should work for strings', function () {
      const set = new WeakishSet()
      const str = 'test'
      set.add(str)
      assert(set.has(str))
      set.delete(str)
      assert(!set.has(str))
    })
  })

  describe('clear()', function () {
    it('should work for objects', function () {
      const set = new WeakishSet()
      const obj = {}
      set.add(obj)
      assert(set.has(obj))
      set.clear()
      assert(!set.has(obj))
    })

    it('should work for strings', function () {
      const set = new WeakishSet()
      const str = 'test'
      set.add(str)
      assert(set.has(str))
      set.clear()
      assert(!set.has(str))
    })
  })
})
