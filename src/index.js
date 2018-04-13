var uniqueRandomArray = require('unique-random-array')
var randomNames = require('./names.json')

module.exports = {
  all: randomNames,
  random: uniqueRandomArray(randomNames)
}
