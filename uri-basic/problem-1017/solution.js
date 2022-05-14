const input = require('fs').readFileSync('./input.txt','utf-8');
const lines = input.split('\n');

const spentTime = parseInt(lines.shift());
const averageSpeed = parseInt(lines.shift());

const fuelNeed = ((spentTime*averageSpeed)/12).toFixed(3);
console.log(fuelNeed);