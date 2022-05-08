const input = require('fs').readFileSync('./input.txt','utf-8');
const lines = input.split('\n');

const inputFirstLine= lines.shift();
const inputSecondLine= lines.shift();

const x1y1= inputFirstLine.split(' ');
const x1= x1y1.shift();
const y1= x1y1.shift();
const x2y2= inputSecondLine.split(' ');
const x2=x2y2.shift();
const y2=x2y2.shift();

const distance = Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)).toFixed(4);
console.log(distance);