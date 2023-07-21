import { wordCount } from "./word-count.js";

const sentence =
  "Using Node.js you can create great applications that are reliable. You can also create embeddeded applications";

const result = wordCount(sentence);

for (let word in result) {
  console.log(word + " : " + result[word]);
}
