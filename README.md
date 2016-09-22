# Array duplicates

Returns the duplicated items in an array.

## Install

```
npm install array-duplicates
```

## Usage

Given an array with duplicates, obtain the duplicated items:

```js
const duplicates = require('array-duplicates')

console.log(duplicates([1, 2, 3, 2, 3, 4])) // [2, 3]
console.log(duplicates([{ id: 1 }, { id: 2 }, { id: 2 }], i => i.id)) // [{ id: 2 }]
```

## API

### `duplicates(array[, identity])`

- `array` is an array containing numbers, string and/or objects.
- `identity` is an optional function that will recieve each item in the array and shall return a value that represents that item. Is needed when comparing objects, otherwhise, the objects will be compared by reference instead of content.

## License

WTFPL
