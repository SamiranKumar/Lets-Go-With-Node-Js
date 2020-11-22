// node practice/readJsonFile.js

let json = require("../data/test.json");
console.log(json, "print json");

json.forEach(myFunction);

function myFunction(value, index, array) {
  console.log(value);
}
