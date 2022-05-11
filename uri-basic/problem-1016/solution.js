const input = require('fs').readFileSync('./input.txt','utf-8');

const km = parseInt(input);

const times = km*2;
console.log(times +' minutos');