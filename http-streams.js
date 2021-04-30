var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    // content length of request is 1.8MB - not good
    // const text = fs.readFileSync("./content/bigger.txt", "utf8");
    // res.end(text);
    // transfer encoding : in chunks
    const fileStream = fs.createReadStream("./content/bigger.txt", "utf8");
    fileStream.on("open", () => {
      // pipe pushes from the read stream to the write stream
      fileStream.pipe(res);
    });
    fileStream.on("error", (error) => {
      res.end(error);
    });
  })
  .listen(5000);
