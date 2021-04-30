// npm - collection of package
// package is the shareable js code (package, module, dependency)
// good indication of package is the amount of weekly download

// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties, etc.)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// version: e.g. 4.17.20
// 4 - major change, breaking changes
// 17 - minor change, backwards compatible
// 20 - patches for bugs

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(items);
console.log(newItems);
console.log("hellooooo");
