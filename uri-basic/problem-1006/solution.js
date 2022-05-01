const input = require('fs').readFileSync('./input.txt', 'utf-8');
const lines = input.split('\n');

const a= lines.shift();
const b= lines.shift();
const c= lines.shift();

const MEDIA =((a*2 + b*3+ c*5)/10).toFixed(1);
console.log("MEDIA = "+MEDIA);

// online judge input file
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');