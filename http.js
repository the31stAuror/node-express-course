const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request);
  if (request.url === "/") {
    // forward slash is home
    response.end("Welcome to our home page");
  }
  if (request.url === "/about") {
    response.end("Here is our short history");
  }
  response.end(
    `<h1>Oops!</h1><p>We can't seem to find the page you ar elooking for</p><a href="/">back home</a>`
  );
});

// keep on listening for requests
// always up
server.listen(5000);
