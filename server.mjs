import { createServer } from "http";

const server = createServer((request, response) => {
  response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  const url = new URL(request.url, "http://localhost:8080");
  const htmlBody = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>My First Node App</title>
    </head>
    <body>
      <h1 style="color: red">My First Node App created by ${
        url.searchParams.get("name") || "Alex"
      }</h1>
    </body>
  </html>`;
  response.end(htmlBody);
});

server.listen(8080, () => {
  console.log(
    `Server is listening on http://localhost:${server.address().port}`
  );
});
