const input = require('fs').readFileSync('./input.txt','utf-8');
const lines = input.split('\n');

const totalDistance = parseInt(lines.shift());
const totalFuel = parseFloat(lines.shift());

const averageConsumption = (totalDistance/totalFuel).toFixed(3);
console.log(averageConsumption+" km/l");