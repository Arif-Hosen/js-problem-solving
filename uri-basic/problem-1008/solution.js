const input = require('fs').readFileSync("./input.txt","utf-8");
const lines = input.split('\n');
 
const number = parseInt(lines.shift());
const workHours= parseInt(lines.shift());
const amountPerHour = parseFloat(lines.shift());

const salary = (workHours*amountPerHour).toFixed(2);

console.log("NUMBER = " + number);
console.log("SALARY = "+ "U$ " + salary);