// const { uptime } = require("os");
// console.log(uptime());
// import { uptime } from "os";
// console.log(uptime());
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// console.log(import.meta.url);
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// console.log(__filename);
// console.log(__dirname);
// import { readFile } from "fs";

// readFile("test.txt", (err, data) => {
//   console.log(data);
//   console.log(data.toString());
// });
let counter = 1;
const interval = setInterval(() => {
  console.log(`counter: ${counter}`);
  counter++;
  if (counter > 5) {
    clearInterval(interval);
  }
}, 1000);
