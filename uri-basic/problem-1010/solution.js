const input = require('fs').readFileSync('./input.txt','utf-8');
const lines = input.split('\n');

const product1= lines.shift();
const product2= lines.shift();

const product1Value=product1.split(' ');
const product2Value=product2.split(' ');

const product1Price=parseFloat(product1Value[1])*parseFloat(product1Value[2]);
const product2Price=parseFloat(product2Value[1])*parseFloat(product2Value[2]);

const valueToPay = (product1Price+ product2Price).toFixed(2);
console.log('VALOR A PAGAR: R$ '+valueToPay);