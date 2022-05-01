const fs= require ('fs');

const data1 =fs.readFileSync('./input1.txt', 'utf-8');
console.log(data1);

// split separate a string to subtring by separator and return them in an array
const line =data1.split("\n");
console.log(line);

const A =parseInt(line.shift());
const B =parseInt(line.shift());
console.log(A,B);

const X= A+B;
console.log("X = "+X, '\n');

// const data2=fs.readFileSync('./input2.txt','utf-8');
// console.log(typeof(data2));

// const sum = parseInt(data1)+parseInt(data2);
// console.log(sum);



