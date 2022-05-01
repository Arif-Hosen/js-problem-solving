const input= require('fs').readFileSync('./input.txt','utf-8');
const radius=parseInt(input);
const pi= 3.14159;

const volume= ((4/3.0)*pi*(radius*radius*radius)).toFixed(3);

console.log("VOLUME = ",volume);
