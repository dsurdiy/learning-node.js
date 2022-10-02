const http = require("http");

const PORT = 8982;

const requestHahdler = (request, response) => {
  if (request.url.indexOf("/home") >= 0) {
    response.writeHead(200, { "Content-Type": "text/json" });
    return response.end('{ "url": "homepage" }');
  }
  response.writeHead(200, { "Content-Type": "text/json" });
  return response.end('{ "url": "other" }');
};

const server = http.createServer(requestHahdler);

server.listen(PORT, (err) => {
  if (err) {
    console.error("Error at server launch: ", err);
  }
  console.log(`Servet works at port ${PORT}`);
});
