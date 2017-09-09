'use strict'

const assert = require('assert')
const formattedRe = /^([0-9]+)\s([A-Za-z]+)$/

function jormat (formatter = []) {
  const length = formatter.length

  return {
    format: value => {
      value = Number.parseInt(value)

      for (let i = 0; i < length; i++) {
        const [label, base] = formatter[i]

        if (!base || value < base) {
          return `${Math.round(value)} ${label}`
        }

        value = value / base
      }

      return value
    },
    parse: value => {
      const parts = formattedRe.exec(value)

      if (parts && parts.length) {
        let vNum = Number.parseInt(parts[1])
        const vLabel = parts[2].toLowerCase()
        const mtps = []

        for (let i = 0; i < length; i++) {
          const [label, base] = formatter[i]
          if (label === vLabel) {
            if (i === 0) {
              return vNum
            } else {
              for (let j = 0; j < mtps.length; j++) {
                let mtp = mtps[j]
                vNum *= mtp
              }
              return vNum
            }
          } else {
            mtps.push(base)
          }
        }
      }

      return value
    }
  }
}

module.exports = jormat
