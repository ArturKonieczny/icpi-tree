// module.exports = require('./src');

const test = require('./src');

test(`pointID;pointFeature;pointX;pointY
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
15;2;27;4
`);
