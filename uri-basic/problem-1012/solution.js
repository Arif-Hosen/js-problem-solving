const input = require('fs').readFileSync('./input.txt','utf-8');
const lines= input.split(' ');

const pi= 3.14159;
const a= parseFloat(lines.shift());
const b= parseFloat(lines.shift());
const c= parseFloat(lines.shift());

const triangleArea = (0.5*a*c).toFixed(3);
const cirleArea= (pi*c*c).toFixed(3);
const trapeziumArea = (((a+b)/2)*c).toFixed(3);
const squareArea = (b*b).toFixed(3);
const reactangleArea = (a*b).toFixed(3);

console.log("TRIANGULO: "+triangleArea);
console.log("CIRCULO: "+cirleArea);
console.log("TRAPEZIO: "+trapeziumArea);
console.log("QUADRADO: "+squareArea);
console.log("RETANGULO: "+reactangleArea);