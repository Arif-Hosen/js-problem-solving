const fs = require('fs');

const input =fs.readFileSync('./index.txt','utf-8');

const pi=3.14159;

const result = parseFloat(input)*parseFloat(input)*pi;
const A =result.toFixed(4);
console.log("A=",A);
