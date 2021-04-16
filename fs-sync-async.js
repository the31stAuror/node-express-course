const { readFileSync, writeFileSync } = require("fs");

// cannot serve other processes if this takes a long time
// executing code line by line
// synchronous
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first, second);

// create file if not existing and write the message
// overwrite if already existing
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result ${first}, ${second}`
);

// append
writeFileSync("./content/result-sync.txt", "\n Hello World", { flag: "a" });
console.log("done with this task");
console.log("starting the next one");
