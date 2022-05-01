const input =require('fs').readFileSync('./input.txt','utf-8');
const lines =input.split('\n');

const namee =lines.shift();
const salary= parseFloat(lines.shift());
const totalSales =parseFloat(lines.shift());

const bonus=totalSales*0.15;
const total=(salary+bonus).toFixed(2);
console.log("TOTAL = R$ "+total);