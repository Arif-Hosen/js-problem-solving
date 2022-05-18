const input =require('fs').readFileSync('./input.txt','utf-8');
let days =parseInt(input);

let years=0;
let months=0;
// let days=0;

if(days>=365){
    years=parseInt(days/365);
    days= days-years*365;
}
if( days>=30){
    months=parseInt(days/30);
    days=days-months*30;
}
else {
    days=days;
}

console.log(years+ ' ano(s)');
console.log(months+' mes(es)');
console.log(days+' dia(s)');