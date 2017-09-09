'use strict'

const jormat = require('./')
const { milliseconds } = require('jormat-formatters')

test('should be defined', () => {
  expect(jormat).toBeDefined()
})

test('should format and parse', () => {
  const { format, parse } = jormat(milliseconds)

  expect(format(9000)).toBe('9 seconds')
  expect(parse('6 minutes')).toBe(360000)
})
