// const { uptime } = require("os");
// console.log(uptime());
// import { uptime } from "os";
// console.log(uptime());
import { dirname } from "path";
import { fileURLToPath } from "url";

console.log(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__filename);
console.log(__dirname);
