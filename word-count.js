const ignoreChars = /[\.,]/;
const separator = " ";

module.exports = function wordCount(sentence) {
  return sentence
    .replace(ignoreChars, "")
    .toLowerCase()
    .split(separator)
    .reduce((prev, current) => {
      prev[current] = prev[current] + 1 || 1;
      return prev;
    }, {});
};
