const { readFile, writeFile } = require("fs");

// can serve other processes.. just offloading current task and starting immediately the next one
// asynchronous
console.log("start");
readFile("./content/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(result); // returns the buffer if utf8 is not specified
  const first = result;
  readFile("./content/second.txt", "utf8", (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the results: ${first}, ${second}`,
      (error, result) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log(result);
        console.log("done with this task");
      }
    );
  });
});
console.log("starting the next task");
