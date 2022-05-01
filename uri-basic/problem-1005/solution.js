const input = require('fs').readFileSync('./input.txt','utf-8');
const lines=input.split('\n');

const a=parseFloat(lines.shift());
const b=parseFloat(lines.shift());

const MEDIA = ((a*3.5+b*7.5)/11).toFixed(5);
console.log("MEDIA = " +MEDIA);