require('babel-polyfill')

function duplicates(array, identity = (i => i)) {
    const unique = []
    const duplicates = []
    array.forEach(function(item) {
      if (unique.includes(identity(item))) {
        duplicates.push(item)
      } else {
        unique.push(identity(item))
      }
    })
    return duplicates
  }

module.exports = duplicates
