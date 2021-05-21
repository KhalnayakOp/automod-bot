const codeGen = require("./index.js");

let code = codeGen.random(5);
let code2 = codeGen.number(6);
console.log('Generated Random Code is "' + code + '"');
console.log('Generated Number Code is "' + code2 + '"');
