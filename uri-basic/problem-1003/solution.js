const input=require('fs').readFileSync('./input.txt','utf-8');
const lines=input.split('\n');


const a =parseInt(lines.shift());
const b =parseInt(lines.shift());


const SOMA=a+b;
console.log("SOMA = "+SOMA);
