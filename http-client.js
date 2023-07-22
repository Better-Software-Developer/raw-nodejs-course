// import request from "request";
// import { createReadStream } from "fs";

// // const formData = {
// //   firstName: "Matthias",
// //   lastName: "Kohnen",
// //   phone: "12312312312",
// //   email: "matthias.kohnen@mail.com",
// //   profilePic: createReadStream("./test.jpg"),
// // };

// // request.post(
// //   { url: "http://localhost:8080/save", formData },
// //   (err, response, body) => {
// //     if (err) {
// //       console.error(err);
// //     } else {
// //       console.log(body);
// //     }
// //   }
// // );
import { connect, constants } from "http2";
import { readFileSync } from "fs";

const client = connect("https://localhost:8080", {
  ca: readFileSync("./localhost.cert"),
});

client.on("error", (err) => console.error(err));

const req = client.request({ [constants.HTTP2_HEADER_PATH]: "/" });

req.setEncoding("utf8");
let body = "";

req.on("data", (chunk) => {
  body += chunk;
});

req.on("end", () => {
  console.log(body);
});

req.end();
