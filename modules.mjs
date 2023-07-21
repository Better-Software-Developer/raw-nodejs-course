// const { uptime } = require("os");
// console.log(uptime());
// import { uptime } from "os";
// console.log(uptime());
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// console.log(import.meta.url);
// function setGlobal() {
//   global.__filename = fileURLToPath(import.meta.url);
//   global.__dirname = dirname(__filename);
// }

// setGlobal();

// console.log(__filename);
// console.log(__dirname);
// import { readFile } from "fs";

// readFile("test.txt", (err, data) => {
//   console.log(data);
//   console.log(data.toString());
// });
// let counter = 1;
// const interval = setInterval(() => {
//   console.log(`counter: ${counter}`);
//   counter++;
//   if (counter > 5) {
//     clearInterval(interval);
//   }
// }, 1000);
// const evtTarget = new EventTarget();
// evtTarget.addEventListener("loggedInEvt", (event) => {
//   console.log(`${event.type} was called!`);
// });

// const loggedInEvt = new Event("loggedInEvt");
// evtTarget.dispatchEvent(loggedInEvt);
// const { port1, port2 } = new MessageChannel();

// port1.on("message", (message) => {
//   console.log(message);
// });

// port2.postMessage({ data: "Hello port1" });
// console.log(process.versions);
// process.on("unhandledRejection", (error) => {
//   console.error("unhandled rejection");
// });

// function throwError() {
//   return Promise.reject("there is an error");
// }

// throwError().then(() => {
//   console.log("completed");
// });
console.log("Synchronous code");
setTimeout(() => {
  console.log("setTimeout");
}, 0);
Promise.resolve().then(() => {
  console.log("Promise");
});
queueMicrotask(() => {
  console.log("queueMicrotask");
});
process.nextTick(() => {
  console.log("next tick");
});
