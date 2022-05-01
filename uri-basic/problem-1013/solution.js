const input = require('fs').readFileSync('./input.txt','utf-8');
const lines = input.split(' ');

const a = parseInt(lines.shift());
const b = parseInt(lines.shift());
const c = parseInt(lines.shift());

const largestAB = (a+b+Math.abs(a-b))/2;
const largest = (largestAB+c+Math.abs(largestAB-c))/2;
console.log(largest+ " eh o maior");