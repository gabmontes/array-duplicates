const { expect } = require('chai')

const duplicates = require('../lib')

describe('Duplicates', function () {
  it('should return none for []', function () {
    const array = []
    const dups = duplicates(array)
    expect(dups).to.have.lengthOf(0)
  })

  it('should return the duplicate numbers in the array', function () {
    const array = [1, 2, 3, 2, 3, 4]
    const dups = duplicates(array)
    expect(dups).to.have.lengthOf(2)
    expect(dups).to.have.members([2, 3])
  })

  it('should return the duplicate objects in the array', function () {
    const array = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 2 }, { id: 4 }]
    const dups = duplicates(array, i => i.id)
    expect(dups).to.have.lengthOf(1)
    expect(dups).to.have.deep.members([{ id: 2 }])
  })
})
