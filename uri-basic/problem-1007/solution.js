const input =require('fs').readFileSync('./input.txt', 'utf-8');
const lines= input.split('\n');

const a =lines.shift();
const b =lines.shift();
const c =lines.shift();
const d =lines.shift();

const DIFERENCA = (a*b - c*d);
console.log('DIFERENCA = '+DIFERENCA);