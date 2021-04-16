const { readFileSync, writeFileSync } = require("fs");

// synchronous
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
