// STREAMS
// writeable - write data sequentially
// readable - read data sequentially
// duplex - both write and read data sequentially
// transform - data can be modified when writing or reading
// extends EventEmitter class

// used for example when reading a big file
const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt");
// const stream = createReadStream("./content/big.txt", {
//   highWaterMark: 90000,
//   encoding: "utf8",
// });

// default 64kb
// last buffer - remainder
// highWaterMark - control size of data chunk
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('./content/big.txt', { encoding: 'utf8' })
stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (error) => {
  console.log(error);
});
