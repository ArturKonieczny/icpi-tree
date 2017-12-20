# icpi-tree
Creates an ICPi-Tree for given vertices.

## Installation

```bash
npm install icpi-tree
```

or simply download and "require" this repository.

## Usage

```js
const ipci = require('icpi-tree');

const { icpiTree, pointData} = icpi(inputData[, maxDist]); // default maxDist is 3

```

## Sample settings

CSV
```js
`pointID;pointFeature;pointX;pointY
pointID should be integer
pointFeature should be 0 or higher, integer
invalid lines are omitted
1;0;1;7
2;3;2;6
3;1;3;8
4;2;4;7
5;2;5;4
6;1;6;7
7;0;11;2
8;2;12;1
9;1;13;2
10;0;18;6
11;2;19;5
12;0;20;7
13;3;21;5
14;1;26;4
15;2;27;4`
```

JS Array of Objects
```js
const  inputData = [ { id: '1', trait: '0', locationX: '1', locationY: '7' },
  { id: '2', trait: '3', locationX: '2', locationY: '6' },
  { id: '3', trait: '1', locationX: '3', locationY: '8' },
  { id: '4', trait: '2', locationX: '4', locationY: '7' },
  { id: '5', trait: '2', locationX: '5', locationY: '4' },
  { id: '6', trait: '1', locationX: '6', locationY: '7' },
  { id: '7', trait: '0', locationX: '11', locationY: '2' },
  { id: '8', trait: '2', locationX: '12', locationY: '1' },
  { id: '9', trait: '1', locationX: '13', locationY: '2' },
  { id: '10', trait: '0', locationX: '18', locationY: '6' },
  { id: '11', trait: '2', locationX: '19', locationY: '5' },
  { id: '12', trait: '0', locationX: '20', locationY: '7' },
  { id: '13', trait: '3', locationX: '21', locationY: '5' },
  { id: '14', trait: '1', locationX: '26', locationY: '4' },
  { id: '15', trait: '2', locationX: '27', locationY: '4' } ];
```

## Returns

1. iCPI-tree in form of hashmap. Key: 'pointID:trait', value: Array of neighbours ids.
2. pointData in form of Object.
```js
pointData = {
  traitCounts: {
    ...
    trait: count,
    ...
  },
  points: [
    ...
    {id, trait, locationX, locationY},
    ...
  ]
}
```
