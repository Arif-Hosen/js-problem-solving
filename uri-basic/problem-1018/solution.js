const input =require('fs').readFileSync('./input.txt','utf-8');

let number=parseInt(input);

let hundredNote=0;
let fiftyNote=0;
let twentyNote=0;
let tenNote=0;
let fiveNote=0;
let twoNote=0;
let oneNote=0;
console.log((number).toString());


if(number>=100){
    hundredNote= parseInt(number/100);
   number=number-hundredNote*100;
}
if(number>=50){
    fiftyNote= parseInt(number/50);
   number=number-fiftyNote*50;
}
if(number>=20){
    twentyNote= parseInt(number/20);
   number=number-twentyNote*20;
}
if(number>=10){
    tenNote= parseInt(number/10);
   number=number-tenNote*10;
}
if(number>=5){
    fiveNote= parseInt(number/5);
   number=number-fiveNote*5;
}
if(number>=2){
    twoNote= parseInt(number/2);
   number=number-twoNote*2;
}
if(number>=1){
    oneNote= parseInt(number/1);
   number=number-oneNote*1;
}

console.log(hundredNote+' nota(s) de R$ 100,00');
console.log(fiftyNote+' nota(s) de R$ 50,00');
console.log(twentyNote+' nota(s) de R$ 20,00');
console.log(tenNote+' nota(s) de R$ 10,00');
console.log(fiveNote+' nota(s) de R$ 5,00');
console.log(twoNote+' nota(s) de R$ 2,00');
console.log(oneNote+' nota(s) de R$ 1,00');

// let remainNote = number/100;
// let noteNumber= parseInt(remainNote);
// console.log(noteNumber);
// remainNote = remainNote*100-noteNumber*100;
// console.log(remainNote);

//  remainNote = remainNote/50;
//  noteNumber= parseInt(remainNote);
//  console.log(noteNumber);
// remainNote = remainNote*50-noteNumber*50;

// console.log(remainNote);
100, 50, 20, 10, 5, 2 ,1.