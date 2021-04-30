// const { readFile, writeFile } = require("fs");
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const { readFile, writeFile } = require("fs").promises;

// const start = async () => {
//   try {
//     const first = await readFilePromise("./content/first.txt", "utf8");
//     const second = await readFilePromise("./content/second.txt", "utf8");
//     await writeFilePromise(
//       "./content/result-mind-grenade.txt",
//       `THIS IS AWESOME: ${first}, ${second}`
//     );
//     console.log(first);
//     console.log(second);
//   } catch (error) {
//     console.log(eoor);
//   }
// };

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME: ${first}, ${second}`,
      { flag: "a" }
    );
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};

start();

// VERSION 1
// what if user wants to read file
// then write to file
// use promises!
// readFile("./content/first.txt", "utf8", (error, data) => {
//   if (error) {
//     return;
//   } else {
//     console.log(data);
//   }
// });

// VERSION2
// async - await : can wait until the promise is settled
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (error, data) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// VERSION 3
// wrap in try-catch block

// const start = async () => {
//   try {
//     const first = await getText("./content/first.txt");
//     const second = await getText("./content/second.txt");
//     console.log(first);
//     console.log(second);
//   } catch (error) {
//     console.log(eoor);
//   }
// };

// start();
